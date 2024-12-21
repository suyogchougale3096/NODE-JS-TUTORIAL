let fs = require('fs')
let http = require('http')

http.createServer(function(req,res){
    fs.readFile('./date.js',function(err,data){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(data)
        res.end();
    })

    fs.appendFile('../hello.txt','Hi suyog',function(err){
        if(err){
            console.log("File apended unsuccess")
        }else{
            console.log("File appended success")
        }
    })
}).listen(8000,() =>{
    console.log("Server is started!")
})