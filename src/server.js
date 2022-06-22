const express = require('express')
const http = require('http')
const config = require('./config')
const app = express()
const server = http.createServer(app)

// Application route files
const indexRouter = require('./routes/index')

config.colors.enable()

app.set('case sensitive routing', true)
app.set('json spaces', 2)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(config.cors())
app.use(config.helmet())

app.use('/', indexRouter)

server.listen(config.PORT, function launchServer() {
    console.log(`[nodemon] server is running on port:${config.PORT}`.green)
})