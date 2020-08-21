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
                    "DESCRIPT|1-30": "<div>@cparagraph(0,1)</div><p>@cparagraph(1,3)</p>",
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
    },


    // answer
    getIssueRepRep() {
        let data = {
            "CODE": "200",
            "USER": "用户1",
            "PARAMS": [
                {
                    "key": "评论的key_2_1",
                    "fromuser": "评论id_91<br/>评论名_姓名1",
                    "TOUSER": "111<br/>姓名1",
                    "descript": "我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据我是后台数据"
                },
                {
                    "key": "评论的key_2_2",
                    "fromuser": "评论id_93<br/>评论名_姓名3",
                    "TOUSER": "被@的用户id_273<br/>被@的用户名_姓名3",
                    "descript": "<p>中”网民“orfila2011”ch。”网民“orfila2011”在评论中atch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch中。”网民“orfila2011”在评论中表示；“陕西蓝天救援队”官方微博也表示watch</p>"
                },
                {
                    "key": "评论的key_2_3",
                    "fromuser": "评论id_95<br/>评论名_姓名5",
                    "TOUSER": "被@的用户id_275<br/>被@的用户名_姓名5",
                    "descript": "<p>我是小孩2-3</p>"
                }, {
                    "key": "评论的key_2_4",
                    "fromuser": "评论id_97<br/>评论名_姓名7",
                    "TOUSER": "",
                    "descript": "<p>我是小孩2-3</p>"
                }
            ]
        };

        return data;
    }

};

module.exports = objFun;

