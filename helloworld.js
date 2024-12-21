let http = require('http')
let { getDate } = require('./date')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/html'})
    res.write('hello world at ' + getDate())
    res.end()
}).listen(8000)