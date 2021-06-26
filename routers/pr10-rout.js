const express = require('express')
const router = express.Router()

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = {
    "avengers": [
        {
            "name": "Tony Stark",
            "power": "Money"
        },
        {
            "name": "Steve Rogers",
            "power": "eye"
        },
        {
            "name": "Thor Odinson",
            "power": "tunder"
        },
        {
            "name": "Bruce Banner",
            "power": "anger"
        },
        {
            "name": "Natasha Romanova",
            "power": "beuty"
        },
        {
            "name": "Clint Barton",
            "power": "cool"
        }
    ]
}

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData)
})

router.post('/insertName', (req, res, next) => {
    // Typically you should do some sort of filtering and error checking. This is minimal, and makes sure we're not accepting empty values
    if (req.body.newName !== undefined) {
        const newName = req.body.newName
        const newPower = req.body.newPower

        // Make our submissions somewhat unique.
        if (!dummyData.avengers.some(a => a.name === newName)) {
            dummyData.avengers.push({ name: newName,
                                        power: newPower }) // Push new object into the dummyData
            res.sendStatus(200)
        }
    } else {
        res.sendStatus(400) // Bad request error code
    }
})

router.get('/pr10', (req, res, next) => {
    res.render('pr10', {
        pageTitle: 'Prove Assignment 10',
        path: '/pr10'
    })
})

module.exports = router