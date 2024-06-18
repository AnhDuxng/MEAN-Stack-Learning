const http = require('http')
const {readFileSync} = require('fs')

// Get all file
const homePage = readFileSync('./navbarr-app/index.html')
const homeStyles = readFileSync('./navbarr-app/styles.css')
const homeImage = readFileSync('./navbarr-app/logo.svg')
const homeLogic = readFileSync('./navbarr-app/browser-app.js')

const server = http.createServer((req, res) => {
const url = req.url;
console.log(url)

if ( url === '/') {
    res.writeHead(200, { 'content-type':'text/html' });
    res.write(homePage)
    res.end()
}
else if ( url === '/about') {
    res.writeHead(200, { 'content-type':'text/html'})
    res.write('<h1>This is our information</h1>')
    res.end()
}

else if ( url === '/styles.css') {
    res.writeHead(200, { 'content-type':'text/css'})
    res.write(homeStyles)
    res.end()
}
else if ( url === '/logo.svg') {
    res.writeHead(200, { 'content-type':'image/svg+xml'})
    res.write(homeImage)
    res.end()
}

else if ( url === '/browser-app.js') {
    res.writeHead(200, { 'content-type':'text/javascript'})
    res.write(homeLogin)
    res.end()
}

else {
    res.writeHead(404, { 'content-type':'text/html'})
    res.write('<h1>There is something wrong!</h1>')
    res.end()
}

})

server.listen(5000)