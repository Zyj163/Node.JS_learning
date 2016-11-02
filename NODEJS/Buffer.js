
//方法 1
//创建长度为 10 字节的 Buffer 实例：
var buf = new Buffer(10);

//方法 2
//通过给定的数组创建 Buffer 实例：
var buf2 = new Buffer([10, 20, 30, 40]);

//方法 3
//通过一个字符串来创建 Buffer 实例：
var buf3 = new Buffer("www.runoob.com", "utf-8");

//写入
/*
 buf.write(string[, offset[, length]][, encoding])
 参数
 参数描述如下：
 string - 写入缓冲区的字符串。
 offset - 缓冲区开始写入的索引值，默认为 0 。
 length - 写入的字节数，默认为 buffer.length
 encoding - 使用的编码。默认为 'utf8' 。
* */

var len = buf.write('www.runoob.com');
console.log('写入字节数:'+len);

//读取
/*
 buf.toString([encoding[, start[, end]]])
 参数
 参数描述如下：
 encoding - 使用的编码。默认为 'utf8' 。
 start - 指定开始读取的索引位置，默认为 0。
 end - 结束位置，默认为缓冲区的末尾。
* */
var re = buf.toString();
console.log(re);

var json = buf.toJSON(buf);
console.log(json);

//合并buffer
var buf4 = Buffer.concat([buf, buf3]);
console.log('合并buf'+buf4.toString());

//拷贝
/*
 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
 参数
 参数描述如下：
 targetBuffer - 要拷贝的 Buffer 对象。
 targetStart - 数字, 可选, 默认: 0
 sourceStart - 数字, 可选, 默认: 0
 sourceEnd - 数字, 可选, 默认: buffer.length
* */
var buf5 = new Buffer(10);
buf5.copy(buf);
console.log(buf5.toString());

//http://www.runoob.com/nodejs/nodejs-buffer.html