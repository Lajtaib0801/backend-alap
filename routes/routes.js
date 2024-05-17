const express = require('express')
const Film = require('../models/Film')
const Forgalmazo = require('../models/Forgalmazo')

const router = express.Router()

router.get('/forgalmazok/:forgalmazo/filmek', async (req, res) => {
    try {
        const forgalmazo = await Forgalmazo.findOne({ Forgalmazo: req.params.forgalmazo })
        const filmek = await Film.find({ Studio_id: forgalmazo._id })
        if (!filmek) {
            res.status(404).json({ message: 'Ennek a forgalmazónak egyetlen filmje sincs.' })
            return
        }
        res.status(200).json({ filmek })
        return
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/filmek', async (req, res) => {
    try {
        let queryStr = JSON.stringify(req.query)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)
        const filmek = await Film.find(JSON.parse(queryStr))
        if (filmek.length === 0) {
            res.status(404).json({
                message: `${
                    Object.values(JSON.parse(queryStr).Hossz)[0]
                } percnél (rövidebb/hosszabb) film nincs az adatbázisban!`,
            })
            return
        }

        res.status(200).json({ filmek })
        return
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router
