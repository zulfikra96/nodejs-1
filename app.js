const http  = require('http')
const url   = require('url')
const routes = require('routes')()



routes.addRoute("/",function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end("hello")
})


// server
http.createServer(function(req,res){
   let path = url.parse(req.url).pathname
   let match = routes.match(path)

   if(match){
        match.fn(req,res)
   }else{
        res.writeHead(404,{
            'Content-Type': 'text/html'
        })
        res.end("No found")
   }
}).listen(8080, function(){
    console.log("server start 8080")
})