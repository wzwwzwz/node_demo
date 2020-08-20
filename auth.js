let Mock = require("mockjs");


let objFun = {
    setPermission: function () {
        let data = Mock.mock({
            "status": 200,
            "data|1-9": [{
                "name|5-8": /[a-zA-Z]/,
                "key|": "@id()",
                "value|0-500": 20
            }]
        });

        return data;
    }
};


module.exports = objFun;
