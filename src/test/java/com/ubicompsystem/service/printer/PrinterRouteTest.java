package com.ubicompsystem.service.printer;

import static org.junit.Assert.*;
import org.junit.Test;

import org.apache.camel.CamelContext;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class PrinterRouteTest{

    @Test
    public void defaultTest(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:camel/camelContext*.xml");
        assertNotNull( "Should instantiate a non-null Application Context", ctx );

        CamelContext camelCtx = (CamelContext) ctx.getBean("printRoutes");
        assertNotNull( "Should instantiate a non-null Camel Context", camelCtx );

        while(true){
            //NoOp
        }

    }
}