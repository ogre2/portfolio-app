const express = require('express')
const http = require('http')
const config = require('./config')
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const server = http.createServer(app)

// Application route files
const indexRouter = require('./routes/index')

config.colors.enable()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, '../client/views'))
app.set('layout', 'layouts/layout')
app.set('case sensitive routing', true)
app.set('json spaces', 2)

app.use(ejsLayouts)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(config.cors())
app.use(config.helmet())

app.use('/', indexRouter)

server.listen(config.PORT, function launchServer() {
    console.log(`[nodemon] server is running on port:${config.PORT}`.green)
})