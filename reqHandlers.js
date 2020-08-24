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
            status: 200,
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
            status: 404,
            data: "骚瑞啊！！！！！！！！！！！！！",
        });

        return data;
    },
};

module.exports = Object.assign({}, objfun, issue, auth, exam);
