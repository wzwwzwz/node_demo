let Mock = require("mockjs");


let objAuth = {

    setPermission() {
        let data = Mock.mock({
            "CODE": 200,
            "PARAMS": [{
                "ID|0-5": /[0-9]/,
                "key|": "@id()",
            }]
        });

        return data;
    },

};

module.exports = objAuth;
