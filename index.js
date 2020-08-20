var server = require("./server");
var router = require("./router");
var reqHandlers = require("./reqHandlers");

var handle = {};

handle["/"] = reqHandlers.start;
handle["/start"] = reqHandlers.start;
handle["/upload"] = reqHandlers.upload;

// issue
handle["/getIssue"] = reqHandlers.getIssue;
handle["/getIssueRep"] = reqHandlers.getIssueRep;

// auth
handle["/setPermission"] = reqHandlers.setPermission;


server.start(router.route, handle);
