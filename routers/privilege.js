//引入express模块
let express = require("express");
//引入mock模块
let Mock = require("mockjs");
//实例化express
let app = express();


let pathSetPermission = "/set_permission";

app.get(pathSetPermission, function (req, rsp) {
    let data = Mock.mock({
        "CODE": 200,
        "PARAMS": [{
            "ID": "1",
            "KEY": /[0-9]/
        }]
    });

    rsp.json(data);
});
