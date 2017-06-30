/**
 * Created by asus on 2017/6/29.
 */
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    //处理/的请求
    if(req.url=='/lol.html'){
        fs.readFile('lol.html','utf-8',function(err,data){
            if(err){
                console.log('SOS');
                res.end(err)
            }else{
                console.log('Good');
                res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
                res.end(data)
            }
        })
    } else if(req.url=='/lol.css'){
        fs.readFile('lol.css','utf-8',function(err,data){
            if(err){
                console.log('SOS');
                res.end(err)
            }else{
                console.log('Good');
                res.writeHead(200,{'Content-type':'text/css;charset=utf8'});
                res.end(data)
            }
        })
    } else if(req.url=='/lol.js'){
        fs.readFile('lol.js','utf-8',function(err,data){
            if(err){
                console.log('SOS');
                res.end(err)
            }else{
                console.log('Good');
                res.writeHead(200,{'Content-type':'text/javascript;charset=utf8'});
                res.end(data);
            }
        })
    } else if(req.url=='/girl.jpg'){
        fs.readFile('girl.jpg','utf-8',function(err,data){
            if(err){
                console.log('SOS');
                res.end(err)
            }else{
                console.log('Good');
                res.writeHead(200,{'Content-type':'image/jpeg;charset=utf8'});
                res.end(data)
            }
        })
    }
}).listen(4000);