var http = require("http");
var url = require("url");
//引入mock模块
// let Mock = require("mockjs");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        // console.log("Request for " + pathname + " received.");

        // 阻止二次请求
        if ("/favicon.ico" === pathname) {
            return;
        }

        // timeout
        request.setTimeout(0.01,function () {
            let msg = "超时啦。。。";

            console.log(msg);
            response.end(msg);
        });


        var returnVal = route(handle, pathname);

        // console.log("返回值----------", returnVal);

        var code = 200;
        var hearder = {
            //   'Content-Type': 'text/plain;charset=utf-8',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        };
        var res = returnVal;

        if (404 === returnVal.status) {
            code = 404;
            //   response.write('骚瑞啊!!!!!!');
            //   res = {};
        }

        response.writeHead(code, hearder);
        response.end(JSON.stringify(res));
    }

    var server = http.createServer(onRequest);

    server.listen(3000);

    console.log("Server running at http://localhost:3000/");
}

exports.start = start;
