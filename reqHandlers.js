let Mock = require("mockjs");


// function
let issue = require("./routers/issue");
let auth = require("./routers/auth");
let exam = require("./routers/exam");
let avatar = require("./routers/avatar");


// common
let objfun = {
    start: function () {
        console.log("Request handler'start' was called");
        let data = Mock.mock({
            CODE: 200,
            "data|1-9": [
                {
                    "name|5-8": /[a-zA-Z]/,
                    "key|": "@id()",
                    "value|0-500": 20,
                },
            ],
        });

        return data;
    },

    upload: function () {
        console.log("Request handler'upload' was called");
    },

    noFun: function () {
        console.log("Request handler'404' was called");
        let data = Mock.mock({
            CODE: 404,
            data: "骚瑞啊！！！！！！！！！！！！！",
        });

        return data;
    },
    heartbeat(param) {
        let data = Mock.mock({
            CODE: 200,
            "PARAMS": [{
                "KEY|": param.PARAMS[0].KEY,
            }]
        });

        return data;
    },
    testGetData() {
        // 使用 mock
        return Mock.mock({
            "CODE": "200",
            "USER": "后台获取用户",
            "PARAMS|50": [
                {
                    "KEY|+1": 1,
                    "QUESTION": "@csentence(1,20)?",
                    "OPTION": "@cword(5,25)<br/>@cword(20)<br/>@integer(10, 500)<br/>@integer(1, 30)",
                    // 题目类型 type "0" === 判断题 || "1" === 单选题 || "2" === 多选题
                    "TYPE|1": ["0","1","2"]
                },
            ]
        });
    }
};

module.exports = Object.assign({}, objfun, issue, auth, exam,avatar);
