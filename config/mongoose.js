const mongoose = require('mongoose')
// const MONGODB_URI = "mongodb+srv://root:12345@cluster0.0kopv.mongodb.net/shortener?retryWrites=true&w=majority"
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/shortener'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error!!')
})
db.once('open', () => {
    console.log('mongodb connected!!')
})

module.exports = db