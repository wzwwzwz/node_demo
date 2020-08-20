let Mock = require("mockjs");


let objFun = {
    getIssueRep: function () {
        let data = Mock.mock({
            "CODE": "200",
            "USER": "用户1",
            "PARAMS|3-15": [
                {
                    "KEY|1-5": /[0-9]/,
                    "ISSUEKEY|1-3": /[0-9]/,
                    "DESCRIPT|1-10": "<div>@cparagraph(0,1)</div><p>@cparagraph(1,3)</p>",
                    "USER": "@id()<br/>@cname()",
                    "TIME": "@time()",
                    "AGREE|1-3": /[0-9]/,
                    "DISAGREE|1-3": /[0-9]/
                }
            ]
        });

        return data;
    },

    getIssue: function () {
        let data = Mock.mock({
            "CODE": 200,
            "PARAMS|3-9": [{
                "KEY": "@id()",
                "STATUS|1-3": /[0-9]/,
                "TITLE": "@ctitle()" + "?",
                "DESCRIPT": "@cparagraph(2)"
            }]

        });

        return data;
    }

};

module.exports = objFun;

