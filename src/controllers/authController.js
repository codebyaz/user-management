const { Router } = require('express');
const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body)

        return res.status(200).send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Fail to create user' })
    }
})

// Expose this router at the /auth url of the app
module.exports = app => app.use('/auth', router)