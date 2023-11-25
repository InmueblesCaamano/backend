const express = require('express')
const router = express.Router()
const Buildings = require('./buildingsModel')
const adminPassword = process.env.NODE_ENV_ADMIN_PASS

router.get('/', (req, res) => {
    //obtener todos los inmuebles
    res.json({ message: "success", status: true, body: {} })
})

router.get('/:id', (req, res) => {
    //obtener 1 inmueble
    res.json({ message: "success", status: true, body: {} })
})

router.post('/', (req, res) => {
    //agregar un inmuebles
    res.json({ message: "success", status: true, body: {} })
})

router.put('/', (req, res) => {
    //editar un inmuebles
    res.json({ message: "success", status: true, body: {} })
})

router.delete('/', (req, res) => {
    //eliminar un inmuebles
    res.json({ message: "success", status: true, body: {} })
})

module.exports = router;
