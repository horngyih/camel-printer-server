# Camel Netty Virtual Network Printer

## Introduction

The idea is to use Camel-Netty4 to implement a TCP Server that masquerades as a Network Printer and receive documents via the Print command. The documents can then be processed via various routes to be acted on.

In the Qikres Suite - this could potentially be used to trigger a switch over to the QikDesk App for Guest Registration from un-interfaced Property Management Systems (PMS).



### Initial Concept

```sequence
PMS->VirtualNetworkPrinter : Print Guest Details
note over PMS, VirtualNetworkPrinter : via TCP/IP Printer Port
VirtualNetworkPrinter->ProcessingRoutes : Receive Document and Route
ProcessingRoutes->DocumentParser : Find appropriate parser
DocumentParser->RouteAction : Route to Action router
RouteAction->Action : Fires to the Appropriate Action
```

