const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')
const colors = require('colors')

dotenv.config({ path: path.resolve(__dirname, './.env') })

module.exports = {
    'PORT': process.env.PORT || 5000,
    cors,
    helmet,
    colors
}