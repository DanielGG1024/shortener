const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortenerSchema = new Schema({
    originUrl: {
        type: String,
        require: true
    },
    shorten: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Shortener', shortenerSchema)