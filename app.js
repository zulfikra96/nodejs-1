const http      = require('http')
const url       = require('url')
const routes    = require('routes')()
const view      = require('swig')


// route
routes.addRoute("/",function(req,res){
    let title = ['zulfikra','lahmudin','rifaizal']
    html  = view.compileFile('./template/home/index.html')({
        title:title,
    })
    
    res.writeHead(200,{'Content-Type' : 'text/html'})
    res.end(html)
})

routes.addRoute("/detail/:name",function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end("hello " + this.params.name)
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