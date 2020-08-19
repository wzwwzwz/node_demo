const { noFun } = require("./reqHandlers");

function route(handle, pathname) {
    // console.log("About to route a request for" + pathname);
    if ("function" == typeof handle[pathname]) {
        return handle[pathname]();
    }
    // console.log("no request handler found for" + pathname);
    console.log("noFun---------",handle,noFun);
    return noFun();
}


exports.route = route;
