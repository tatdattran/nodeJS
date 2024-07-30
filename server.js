const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html')
    res.write('<h2> Hello World from Tat Dat </h2>')
    res.end()
})

server.listen(port, 'localhost', () => {
    console.log('NodeJS server is running on port', port)
})