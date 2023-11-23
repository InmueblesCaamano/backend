const express = require('express');
const router = express.Router();
const User = require('./usersModel')

router.get('/', async (req, res) => {
    const response = await User.find()
    res.json(response)
})

router.get('/:wallet', async (req, res) => {
    const wallet = req.params.wallet
    const response = await User.findOne({ wallet })
    res.json(response)
})

router.post('/', async (req, res) => {
    const user = req.body
    const userToRegister = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password
    }
    const response = await User(userToRegister).save()
    if (response) {
        res.json({ message: "success", status: true, body: response })
    } else {
        res.status(404).json({ message: "Error al registrar", status: true, body: {} })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const userFinded = await User.findOne({ email })
    if (!userFinded) {
        res.json({ message: "Usuarion no registrado", status: false })
    }

    const response = await User.findOne({ email, password })
    console.log(response)
    if (response) {
        const body = {
            name: response.name,
            email: response.email,
            phone: response.phone,
            level: response.level
        }
        res.json({ message: "success", status: true, body })
    } else {
        res.json({ message: "Contraseña Incorrecta", status: false })
    }
})


module.exports = router;