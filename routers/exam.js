
let Mock = require("mockjs");


let objExam = {
    submitExam() {
        let data = Mock.mock({
            "CODE": "200",
            "USER": "用户1",
            "PARAMS": [{
                "KEY": "1425",
                "STATUS|1": ["0","1"]
            }]
        });

        return data;
    },

    getExam(param) {
        if ("" === param) {
            return {
                status: 201,
                data: "骚瑞啊！！！！！！！！！！！！！",
            };
        }

        let json = {
            CODE: "200",
            USER: "用户1",
            PARAMS: [
                {
                    KEY: "exam1",
                    QUESTION: "后台数据这是考题1:1+2=?",
                    OPTION: "5<br/>8<br/>9<br/>3",
                    // 题目类型 type "0" === 判断题 || "1" === 单选题 || "2" === 多选题
                    TYPE: "1"
                },
                {
                    KEY: "exam2",
                    QUESTION: "这是考题2:这一题是判断题吗？",
                    OPTION: "正确<br/>错误",
                    TYPE: "0"
                }, {
                    KEY: "exam3",
                    QUESTION: "这是考题3:99+1=？",
                    OPTION: "500<br/>800<br/>100<br/>300",
                    TYPE: "1"
                }, {
                    KEY: "exam4",
                    QUESTION: "这是考题4:1+2=3",
                    OPTION: "正确<br/>错误",
                    TYPE: "0"
                }, {
                    KEY: "exam5",
                    QUESTION: "多选这是考题5:人类的本质是",
                    OPTION: "复读机<br/>打印鸡<br/>订书机",
                    TYPE: "2"
                }, {
                    KEY: "exam6",
                    QUESTION: "多选这是考题6:气死我了！！！！",
                    OPTION: "复读机<br/>打印鸡<br/>订书机",
                    TYPE: "2"
                }
            ]
        };

        // 使用 mock
        json = Mock.mock({
            "CODE": "200",
            "USER": "后台获取用户",
            "PARAMS|1-50": [
                {
                    "KEY|+1": 1,
                    "QUESTION": "@csentence(1,20)?",
                    "OPTION": "@cword(5,25)<br/>@cword(20)<br/>@integer(10, 500)<br/>@integer(1, 30)",
                    // 题目类型 type "0" === 判断题 || "1" === 单选题 || "2" === 多选题
                    "TYPE|1": ["0","1","2"]
                },
            ]
        });


        return json;
    },

};

module.exports = objExam;
