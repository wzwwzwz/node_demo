var http = require("http");
var url = require("url");


//获取到单一参数要用到的模块
// var queryString = require("querystring");
// var util = require("util");

var dataHandle = require("./common/dataHandle");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        // 阻止二次请求
        if ("/favicon.ico" === pathname) {
            return;
        }

        if ("OPTIONS" === request.method) {
            // return;
        }

        // timeout
        request.setTimeout(100,function () {
            let msg = "超时啦。。。";

            console.log(msg);
            response.end(msg);
        });

        var postData = "";

        // listen data
        request.on("data", function (data) {
            postData += data;
        });


        request.on("end", function () {
            var hearder = {
                "Content-Type": "text/plain;charset=utf-8",
                // "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            };

            //  axios two request
            if ("" === postData && "OPTIONS" === this.method) {
                response.writeHead(200, hearder);
                response.end();
                return;
            }

            // ungzip && 解压
            postData = dataHandle.decrypt(dataHandle.ungzip(postData));
            console.log("[路径名] -- " + pathname);
            console.log("[REQUEST PARAM UNGZIP] -- ",postData);

            // get response data
            var returnVal = route(handle, pathname, JSON.parse(postData));
            var code = 200;

            // 404
            if (404 === returnVal.status) {
                code = 404;
            }

            response.writeHead(code, hearder);

            // 加密 && 压缩
            let param = dataHandle.gzip(dataHandle.encrypt(JSON.stringify(returnVal)));

            console.log("[RESPONSE PARAM] -- ",param);

            // console.log("再来一遍",dataHandle.decrypt(dataHandle.ungzip(param)));

            response.end(param);
        });
    }

    var server = http.createServer(onRequest);

    server.listen(3000);

    console.log("Server running at http://localhost:3000/");


    // 压缩文件
    dataHandle.gzipFile("./test/1.txt");
}

exports.start = start;
