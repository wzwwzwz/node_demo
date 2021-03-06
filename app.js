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
handle["/getIssueRepRep"] = reqHandlers.getIssueRepRep;

// auth
handle["/setPermission"] = reqHandlers.setPermission;

// exam
handle["/submitExam"] = reqHandlers.submitExam;
handle["/getExam"] = reqHandlers.getExam;

// home
handle["/heartbeat"] = reqHandlers.heartbeat;

// avatar
handle["/uploadAvatar"] = reqHandlers.upload;


server.start(router.route, handle);
