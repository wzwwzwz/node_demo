// eg:
// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// // console.log('Server running at http://192.168.1.14:8888/');


var http = require("http");
var url = require("url");
var util = require("util");
//  读取文件按
var fs = require("fs");

console.log(url);

// 设置端口
var host = 3000;

//引入express模块
let express = require("express");
//引入mock模块
let Mock = require("mockjs");
//实例化express
let app = express();


// http.createServer(function (req, res) {
//     //后端设置允许跨域
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     //设置响应的头信息
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8',});
//     // 返回方法一
//     res.end(util.inspect(url.parse(req.url, true)));
//     // 返回数据方法二
//     // //给前台响应数据
//     // res.write("希望对你有所帮助，谢谢");
//     // //响应结束
//     // res.end();
// }).listen(host);


// 中间件
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.all("/test.action", function (req, res) {
    /**
     * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
     */
    let data = Mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    });

    res.json(data);
    console.log("test.action 返回数据 ————————————————");
    console.log(data);
}).listen(3000);

console.log("Server running at http://localhost:" + host + "/");


// server.js
// app[url_data.methods](url, (req, res) => {
//     vailedHandle(url_data.vailed, url_data.methods === 'get' ? req.query : req.body, url_data.mock(), res);
// });

//project mock
const index = {
    "xxx/getUserInfo": {
        mock: () => {
            return Mock.mock({
                code: 0,
                "data|1-9": [{
                    "nickname|5-8": /[a-zA-Z]/,
                    "age|0-99": 20
                }]
            });
        }
    }
};


// 获取论点
let pathGetIssue = "/getIssue";

app.post(pathGetIssue, function (reu, rsp) {
    let data = Mock.mock({
        "CODE": 200,
        "PARAMS|3-9": [{
            "KEY|+1": 1,
            "STATUS|1-3": /[0-9]/,
            "TITLE": "@cparagraph(1)" + "?",
            "DESCRIPT": "@cparagraph(2)"
        }]

    });

    rsp.json(data);
    console.log(`${pathGetIssue} -------------- 返回数据 ------------------`);
    console.log(data);
});
