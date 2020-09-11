const { Int32 } = require('mongodb')
const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
    

})

module.exports = mongoose.model('Alien',alienSchema)
