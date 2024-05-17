const mongoose = require('mongoose')

const mobilGyartoSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  nev: {
    type: String,
    required: true,
    unique: true,
    maxlength: [30, 'A név nem tartalmazhat 30 karakternél többet!'],
  },
  alapitva: Number,
  elnok: String
})

module.exports = mongoose.model('MobilGyarto', mobilGyartoSchema, 'mobilGyartok')
