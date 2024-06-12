const http = require('http')

const server = http.createServer((req, res) =>{
   if(req.url === '/'){
    res.end('This is our homepage')
   }
    else if (req.url === '/about'){
    res.end('This is information about our webiste')
   }
   else {
   res.end(`
    <h1>Oops!</h1>
    <p> We can't find the page you're looking for</p>
    <a href="/">Back to homepage</a>`)
    }
})

server.listen(5000)