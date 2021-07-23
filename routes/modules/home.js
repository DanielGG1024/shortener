const express = require('express')
const router = express.Router()
const Shortener = require('../../models/shortener')
const generator = require('../../tools/generator')
router.get('/', (req, res) => {
    const url = req.body.url
    res.render('index')
})

router.post('/', (req, res) => {
    const password = generator()
    const originUrl = req.body.url
    return Shortener
        .create({ originUrl, password })
        .then(() => res.render('show', { password, originUrl }))
        .catch(error => console.log(error))
})

module.exports = router