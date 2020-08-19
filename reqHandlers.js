
let Mock = require("mockjs");


function start() {
    console.log("Request handler'start' was called");
    let data = Mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    });

    return data;
}

function upload() {
    console.log("Request handler'upload' was called");
}

function getIssue() {
    console.log("Request handler'start' was called");
    let data = Mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    });

    return data;
}


function noFun() {
    console.log("Request handler'404' was called");
    let data = Mock.mock({
        "status": 404,
        "data": "骚瑞啊！！！！！！！！！！！！！"
    });

    return data;
}

exports.start = start;
exports.upload = upload;
exports.getIssue = getIssue;
exports.noFun = noFun;
