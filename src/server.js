const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
    // TODO Get index
    res.status(200).json({
        message: 'Hello World!'
    })
})

server.listen(5000, function launchServer() {
    console.log(`[nodemon] server is running on port:${5000}`)
})