var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//In JavaScript, objects are just collections of name/value pairs
//In this case, we map strings (endpoint URLs) to functions (requestHandlers)
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
