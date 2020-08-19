var server = require("./server");
var router = require("./router");
var reqHandlers = require("./reqHandlers");

var handle = {};

handle["/"] = reqHandlers.start;
handle["/start"] = reqHandlers.start;
handle["/upload"] = reqHandlers.upload;

// add router
handle["/getIssue"] = reqHandlers.getIssue;


server.start(router.route, handle);
