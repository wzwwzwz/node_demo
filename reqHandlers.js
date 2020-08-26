let Mock = require("mockjs");


// function
let issue = require("./routers/issue");
let auth = require("./routers/auth");
let exam = require("./routers/exam");


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
    }
};

module.exports = Object.assign({}, objfun, issue, auth, exam);
