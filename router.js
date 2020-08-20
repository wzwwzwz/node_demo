const { noFun } = require("./reqHandlers");

function route(handle, pathname) {
    // console.log("About to route a request for" + pathname);

    // console.log("handle---------",handle);
    // console.log("路径",pathname);
    // console.log("方法",handle[pathname]);

    if ("function" == typeof handle[pathname]) {
        return handle[pathname]();
    }
    // console.log("no request handler found for" + pathname);

    return noFun();
}

exports.route = route;
