let Mock = require("mockjs");


// const formidable = require("formidable");
// const path = require("path");


let objAvatar = {

    upload(param) {
        console.log(param);

        // var form = new formidable.IncomingForm();

        // form.encoding = "utf-8";
        // form.uploadDir = path.join(__dirname + "/../page/upload");
        // //保留后缀
        // form.keepExtensions = true;
        // form.maxFieldsSize = 2 * 1024 * 1024;
        //处理图片
        // form.parse(req, function (err, fields, files) {
        //     console.log(files.the_file);
        //     var filename = files.the_file.name;
        //     var nameArray = filename.split(".");
        //     var type = nameArray[nameArray.length - 1];
        //     var name = "";

        //     for (var i = 0; i < nameArray.length - 1; i++) {
        //         name += nameArray[i];
        //     }
        //     var date = new Date();
        //     var time = "_" + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
        //     var avatarName = name + time + "." + type;
        //     var newPath = form.uploadDir + "/" + avatarName;

        //     fs.renameSync(files.the_file.path, newPath); //重命名
        //     res.send({data: "/upload/" + avatarName});
        // });

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

module.exports = objAvatar;


