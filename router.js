const { noFun } = require("./reqHandlers");

function route(handle, pathname, params) {
    if ("function" == typeof handle[pathname]) {
        return handle[pathname](params);
    }

    return noFun();
}

exports.route = route;
