let fs = require('fs')
let http = require('http')

http.createServer(function(req,res){
    fs.readFile('./date.js',function(err,data){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(data)
        res.end();
    })
}).listen(8000)