var http = require('http');
var querystring = require('querystring');
var util = require('util');
var choicesServer = require('./service');

function choices (req, res) {

    var data = {key: 'value', hello: 'world'};

	var post = '';     //定义了一个post变量，用于暂存请求体的信息

    //res.writeHead(200, {"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
    req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post += chunk;
    });

    req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        post = querystring.parse(post);
        choicesServer.addChoiceServer(post);
        console.log(post);  
        choicesServer.getChoicesServer(res);
    });
}
exports.choices = choices;