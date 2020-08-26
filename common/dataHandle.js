const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const pako = require("pako");
const CryptoJS = require("crypto-js");


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


// 压缩
function gzip(str) {
    // escape(str)  --->压缩前编码，防止中文乱码
    var binaryString = pako.gzip(escape(str), { to: "string" });

    return binaryString;
}

function ungzip(key) {
    // 将二进制字符串转换为字符数组
    var charData = key.split("").map(function (x) {
        return x.charCodeAt(0);
    });

    // console.log("压缩后的文件大小:", charData.join(","));

    // 将数字数组转换成字节数组
    var binData = new Uint8Array(charData);

    // 解压
    var data = pako.inflate(binData);

    // 将GunZip ByTAREAR转换回ASCII字符串
    key = String.fromCharCode.apply(null, new Uint16Array(data));

    // unescape(str)  --->解压后解码，防止中文乱码
    return unescape(key);
}

function encrypt(word, keyStr) {
    keyStr = keyStr || "abcdefgabcdefg12";
    // Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});

    return encrypted.toString();
}
function decrypt(word, keyStr) {
    keyStr = keyStr || "abcdefgabcdefg12";
    // Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var decryptStr = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});

    return CryptoJS.enc.Utf8.stringify(decryptStr).toString();
}


module.exports = { gzipFile,ungzipFile,gzipData,ungzipData,gzip,ungzip,decrypt,encrypt };

// 压缩文件 gzipFile('./1.txt')
// 解压文件 ungzipFile('./1.txt.gz')

// 压缩数据 gzipData("Im string")
// 解压数据 ungzipData("dddd")
