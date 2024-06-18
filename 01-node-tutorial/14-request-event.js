const http = require('http')

// const server = server.createServer((req, res) =>{
//    res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emit request event 
// subcribe/ listen/ respond to it
server.on('request', (req, res) =>{
    res.end('Welcome')
}) 

server.listen(5000)