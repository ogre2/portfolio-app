const config = require('../config')
const router = require('express').Router()

config.colors.enable()

router.get('/', (req, res) => {
    // TODO GET index
    try {
        res.status(200).json({
            success: true,
            message: 'Index route'
        })
    }
    catch(error) {
        res.status(500).json({
            success: 'false',
            message: error.message
        })

        console.log(error.message.red)
    }
})

module.exports = router