const Shortener = require('../shortener')
const db = require('../../config/mongoose')


const shortenSeed = [
    {
        originUrl: 'https://www.google.com/',
        shorten: 'Bf34a'
    },
    {
        originUrl: 'https://github.com/',
        shorten: 'aKF2F'
    },
    {
        originUrl: 'https://codepen.io/trending',
        shorten: 'lDt3z'
    },
    {
        originUrl: 'https://lighthouse.alphacamp.co/',
        shorten: 'ALPHA'
    },
    {
        originUrl: 'https://www.dropbox.com/home',
        shorten: '5dF2'
    }
]

db.once('open', () => {
    Shortener.create(shortenSeed)
        .then(() => {
            console.log('shortener seeder is done!')
            return db.close()
        })
})
