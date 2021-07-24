const express = require('express')
const router = express.Router()
const Shortener = require('../../models/shortener')
const generator = require('../../tools/generator')
const mainUrl = 'http://localhost:3000/'

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const originUrl = req.body.url
    Shortener
        .find()
        .lean()
        .then(allUrl => {
            newShorten = allUrl.find(eachUrl => eachUrl.originUrl === originUrl)

            if (newShorten) {
                newShorten = mainUrl + newShorten.shorten
                return res.render('show', { newShorten, originUrl })
            }

            let shorten = generator()
            newShorten = mainUrl + shorten

            while (allUrl.some(eachUrl => eachUrl.shorten === shorten)) {
                shorten = generator()
            }
            return Shortener.create({ originUrl, shorten })
                .then(() => res.render('show', { originUrl, newShorten }))
        })
        .catch(error => console.log(error))
})

router.get('/:shorten', (req, res) => {
    const shorten = req.params.shorten
    Shortener
        .findOne({ shorten: shorten })
        .lean()
        .then((relink) => {
            if (relink) {
                res.redirect(relink.originUrl)
            } else {
                const error = '查無資料'
                res.render('index', { error })
            }
        })
        .catch(error => console.log(error))
})

module.exports = router