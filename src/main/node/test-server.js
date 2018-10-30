const _net = require("net");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 9199;

const TARGET_HOST = process.env.TARGET_HOST || "127.0.0.1";
const TARGET_PORT = process.env.TARGET_PORT || 9200;

function repeater(socket){
    let recvd ="";
    console.log( "Connected..." );
    console.log( "Receiving..." );
    socket.on("data", data=> recvd += data );
    socket.on("close", ()=>{
        if( recvd){
            if( recvd.trim().toUpperCase() === "CLOSE" ){
                process.exit(1);
            }
            repeat(recvd)
        }
    });
}

function repeat( data ){
    let socket = new _net.Socket();
    socket.connect(TARGET_PORT, TARGET_HOST, ()=>{
        console.log( `Repeating to ${TARGET_HOST}:${TARGET_PORT}`);
        socket.write( data, ()=>{
            console.log( `Data sent to ${TARGET_HOST}:${TARGET_PORT}`);
        });
    });
}

let server = _net.createServer(repeater);
server.listen(PORT, HOST, ()=>{
    console.log( `Listening on ${HOST}:${PORT}`);
});