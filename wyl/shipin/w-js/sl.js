/*<meta content="text/html; charset=utf-8" http-equiv="Content-Type">*/

var urlList=[];
urlList.push('http://jk.zgzx.com.cn/2018-03/31/content_8983552.htm');urlList.push('http://wh.zgzx.com.cn/2018-03/31/content_9746596.htm');urlList.push('http://wh.zgzx.com.cn/2018-03/31/content_9746594.htm');urlList.push('http://jk.zgzx.com.cn/2018-03/30/content_8983896.htm');urlList.push('http://jk.zgzx.com.cn/2018-03/30/content_8983681.htm');urlList.push('http://jk.zgzx.com.cn/2018-03/30/content_8983671.htm');urlList.push('http://jk.zgzx.com.cn/2018-03/30/content_8983567.htm');urlList.push('http://jk.zgzx.com.cn/2018-03/30/content_9010094.htm');
var nums = Math.floor(Math.random()*2) + 3;
var newList = [];
var htmls = '<div id="zgzx_sl" style="width:0; height:0; display:none;">';
for(var i=0; i<nums; i++){
    var rand = Math.floor(Math.random() * urlList.length);
    newList.push(urlList[rand]);
    urlList.splice(rand, 1);
}
for(var j=0; j<newList.length; j++){
    htmls += '<iframe src="'+newList[j]+'" width="0" height="0" scrolling="no" frameborder="0" style="display:none"></iframe>';
}
htmls += '</div>';
document.write(htmls);
