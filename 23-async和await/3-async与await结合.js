/**
 * resource  1.html  2.html 3.html 文件内容
 */

const fs = require('fs');
const util = require('util');//
const mineReadFile = util.promisify(fs.readFile);//注意这两行代码   是用于创建一个promise对象的  我们后面就可以直接这个那个方法

//回调函数的方式
// fs.readFile('./resource/1.html', (err, data1) => {
//     if(err) throw err;
//     fs.readFile('./resource/2.html', (err, data2) => {
//         if(err) throw err;
//         fs.readFile('./resource/3.html', (err, data3) => {
//             if(err) throw err;
//             console.log(data1 + data2 + data3);
//         });
//     });
// });

//async 与 await
//【我们可以发现在async和await这种语法糖写法中是看不到回调函数的   非常简洁  就像我们写同步调用的函数差不多  但是它们内部的执行却是异步的】
async function main(){
    try{
        //读取第一个文件的内容
        let data1 = await mineReadFile('./resource/1x.html');
        let data2 = await mineReadFile('./resource/2.html');
        let data3 = await mineReadFile('./resource/3.html');
        console.log(data1 + data2 + data3);
    }catch(e){//【如果出错的话我们不用每一层去做if判断  直接trry  catch包裹  注意代码全部写在了try里面】
        console.log(e.code);
    }
}

main();//需要调用 


/* 
    【一个困扰多久的问题终于解决了，如何在vscode终端看到console.log输出】
    首先cd到当前文件夹 cd 23-async和await (因为这里直接打开是在vue_basic文件夹下的) 
    然后  node 3-async与await结合.js   (这里是本文件夹的举例  就是node加上js的文件名)

*/