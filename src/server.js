const express = require('express')
const http = require('http')
const { ppid } = require('process')
const config = require('./config')
const app = express()
const server = http.createServer(app)

config.colors.enable()

app.set('case sensitive routing', true)
app.set('json spaces', 2)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(config.cors())
app.use(config.helmet())

app.get('/', (req, res) => {
    // TODO Get index
    res.status(200).json({
        message: 'Hello World!'
    })
})

server.listen(config.PORT, function launchServer() {
    console.log(`[nodemon] server is running on port:${config.PORT}`.green)
})