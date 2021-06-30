var print = require("../common/log.js");

let obj_test = require("../reqHandlers");

const buf = Buffer.from("runoob", "ascii");

// 输出 72756e6f6f62
// print(buf.toString("hex"));

// 输出 cnVub29i
// print(buf.toString("base64"));

var bufAlloc = Buffer.alloc(1,"ascii");

// print(bufAlloc.toString("hex"));


const buf6 = Buffer.from("i am the bast one", "latin1");

print("buf6", buf6);

let o_buf6 = buf6.toString();

print("buf6 tostring",o_buf6);


const i_buf7 = Buffer.from(JSON.stringify( obj_test.testGetData("1") ));

i_buf7.toString();


var i_buf8 = Buffer.from("yes,you are the best!");
var concat_buf = Buffer.concat([i_buf8,buf6]);

// print( "[buffer concat]",concat_buf.toString());

var i_buf9 = Buffer.from(["1,2,3,4,5,6"]);
// return num ; means buf6 before i_buf9 === num < 0 || after i_buf9 === num === 0 || at the same i_buf9 === num > 0
var buf_compare = i_buf8.compare(i_buf9);

print("buffer compare",buf_compare);


let i_buf10 = Buffer.from("i am buf10");
let i_buf11 = Buffer.from("just a buf11");

i_buf10.copy(i_buf11,5);
print("buffer copy",i_buf11.toString());


let i_buf10_slice = i_buf10.slice(2);

print("buffer slice",i_buf10_slice.toString());

print("buffer length",i_buf10.length );
