const fs = require("fs");
const zlib = require("zlib");
const path = require("path");


/**
 * @functionName gzipFile
 * @description gzip File
 * @param { String } $src file src
 * @author 巫昭雯
 * @date 2020-08-25 16:05:21
 * @version V1.0
 * @mark The gzip file is in this level folder
*/
function gzipFile($src) {
    fs.stat($src, function (err, stats) {
        if (err) {
            return;
        }
        if (stats.isFile()) {
            let rs = fs.createReadStream($src);
            // zlib.createGzip()创建一个gzip转换流，是一个可读可写流。
            // 通过管道将数据读取出来写入gzip流，然后又通过管道写入一个文件流中
            var $dst = path.join(__dirname, path.basename($src) + ".gz");

            rs.pipe(zlib.createGzip()).pipe(fs.createWriteStream($dst));
        }
    });
}


// ungzipFile file
/**
 * @functionName ungzipFile
 * @description ungzip File
 * @param { String } $src ungzip File src
 * @author 巫昭雯
 * @date 2020-08-25 16:09:46
 * @version V1.0
 * @mark The ungzip file is in this level folder
*/
function ungzipFile($src) {
    fs.stat($src, function (err, stats) {
        if (err) {
            return;
        }
        if (stats.isFile()) {
            let rs = fs.createReadStream($src);
            // zlib.createGunzip()创建一个gunzip转换流
            var $dst = path.join(__dirname, path.basename($src, ".gz"));

            rs.pipe(zlib.createGunzip()).pipe(fs.createWriteStream($dst));
        }
    });
}


/**
 * @functionName gzipData
 * @description
 * @param { String } data  || buffer
 * @param { String } callback  || buffer
 * @author 巫昭雯
 * @date 2020-08-25 15:52:37
 * @version V1.0
*/
function gzipData(data,callback) {
    zlib.gzip(data, function (err, buffer) {
        if (err) {
            console.log(err);
            return callback(true,err);
        }
        // buffer就是压缩后的数据
        // let res = buffer.toString();

        console.log(buffer);

        return callback(false,buffer);
    });
}


/**
 * @functionName ungzipData
 * @description 解压数据
 * @param { String } bufferParam
 * @param { String } callback
 * @author 巫昭雯
 * @date 2020-08-25 15:54:26
 * @version V1.0
*/
function ungzipData(bufferParam,callback) {
    //对buffer数据进行解压
    zlib.unzip(bufferParam, function (err, buffer) {
        if (err) {
            if ("function" === typeof callback) {
                callback(true,err);
                return;
            }
        }
        let res = buffer.toString();

        console.log(res);

        if ("function" === typeof callback) {
            callback(false,res);
        }

        // return true;
    });
}


module.exports = {gzipFile,ungzipFile,gzipData,ungzipData};

// 压缩文件 gzipFile('./1.txt')
// 解压文件 ungzipFile('./1.txt.gz')

// 压缩数据 gzipData("Im string")
// 解压数据 ungzipData("dddd")
