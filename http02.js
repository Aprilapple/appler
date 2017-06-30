/**
 * Created by asus on 2017/6/29.
 */
var http=require("http");
var fs=require("fs");
http.createServer(function (req,res) {
    var url=req.url;
    switch (url){
        case"/lol.html":
            fs.readFile('lol.html','utf-8',function(err,data){
                if(err){
                    console.log('SOS');
                    res.end(err)
                }else{
                    console.log('Good');
                    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
                    res.end(data)
                }
            });
            break;
        case"/lol1.html":
            fs.readFile('lol1.html','utf-8',function(err,data){
                if(err){
                    console.log('SOS');
                    res.end(err)
                }else{
                    console.log('Good');
                    res.writeHead(200,{'Content-type':'text/css;charset=utf8'});
                    res.end(data)
                }
            });
            break;
        case"/lol2.html":
            fs.readFile('lol2.html','utf-8',function(err,data){
                if(err){
                    console.log('SOS');
                    res.end(err)
                }else{
                    console.log('Good');
                    res.writeHead(200,{'Content-type':'text/javascript;charset=utf8'});
                    res.end(data)
                }
            });
            break;
    }
}).listen(2000);