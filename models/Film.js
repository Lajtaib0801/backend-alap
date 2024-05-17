const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    Cim_en: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
    },
    Cim_hu: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
    },
    Studio_id: Number,
    Bemutato: {
        type: Date,
        required: true,
        min: ['1931-03-07', 'Ilyen régi film nem létezik!'],
    },
    Hossz: {
        type: Number,
        required: true,
        min: [60, 'Egy filmnek legalább 1 órásnak kell lennie!'],
    },
    Rendezo: {
        type: String,
        required: true,
        maxlength: 30,
    },
})

module.exports = mongoose.model('Film', filmSchema, 'filmek')
