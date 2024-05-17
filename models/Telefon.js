const mongoose = require('mongoose')

const telefonSchema = new mongoose.Schema({
	nev: {
		type: String,
		required: [true, 'A név megadása kötelező!'],
		unique: true,
		trim: true,
		lowercase: true,
		maxlength: [50, 'A név nem lehet hosszabb 50 karakternél!']
	},
	ar: {
		type: Number,
		default: 0
	},
	szin: {
		type: String,
		default: "fekete"
	},
	gyarto: {
		type: Number,
		ref: 'MobilGyarto'
	}
})

module.exports = mongoose.model('Telefon', telefonSchema, 'telefonok') // telefonok névvel lesz létrehozva a kollekció.