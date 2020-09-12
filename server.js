var http = require("http");
var url = require("url");

var dataHandle = require("./common/dataHandle");

//获取到单一参数要用到的模块
// var queryString = require("querystring");
// var util = require("util");

var mysql = require("mysql");

require("./common/Buffer");

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

        // resolve axios send two request; one is "OPTION"; another is real request
        if ("POST" !== request.method ) {
            response.writeHead(200, {
                "Content-Type": "text/plain;charset=utf-8",
                // "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            });
            response.end();
            return;
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

            // ungzip && 解密
            postData = dataHandle.decrypt(dataHandle.ungzip(postData));
            console.log("[路径名] -- " + pathname);
            // console.log("[REQUEST PARAM UNGZIP] -- ",postData);

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

            // console.log("[RESPONSE PARAM] -- ",param);
            // console.log("再来一遍",dataHandle.decrypt(dataHandle.ungzip(param)));

            response.end(param);
        });
    }

    var server = http.createServer(onRequest);
    var post = 3000;

    server.listen(post);
    console.log(`Server running at http://localhost:${post}/`);


    // 压缩文件
    dataHandle.gzipFile("./test/1.txt");


    // test_connect_sql();
    function test_connect_sql() {
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123456",
            port: "3306",
            database: "test"
        });

        connection.connect();

        var sql = "SELECT * FROM websites";
        //查

        connection.query(sql,function (err, result) {
            if (err) {
                console.log("[SELECT ERROR] - ",err.message);
                return;
            }

            console.log("--------------------------SELECT----------------------------");
            console.log(result);
            console.log("------------------------------------------------------------\n\n");
        });

        connection.end();
    }
}

exports.start = start;
