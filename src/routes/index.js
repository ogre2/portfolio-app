const router = require('express').Router()

router.get('/', (req, res) => {
    // TODO GET index
    res.status(200).json({
        success: true,
        message: 'Index route'
    })
})

module.exports = router