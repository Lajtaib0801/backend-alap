const mongoose = require('mongoose')

const forgalmazoSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    Forgalmazo: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
    },
    Alapitva: {
        type: Number,
        required: true,
    },
    Kozpont: {
        type: String,
        required: true,
        maxlength: 30,
    },
    Logo: {
        type: String,
        default: 'no-img.jpg'
    },
})

module.exports = mongoose.model('Forgalmazo', forgalmazoSchema, 'forgalmazok')
