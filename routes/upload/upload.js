const express = require('express')
const router = express.Router()
const Buildings = require('../buildings/buildingsModel')
router.post('/:id', async (req, res) => {

    const _id = req.params.id
    const { url } = req.body

    try {
        const respuesta = await Buildings.findOneAndUpdate({ _id }, { $push: { images: url } })
        if (respuesta) {
            res.json({ message: "success images", status: true, body: respuesta })
        }
        else {
            console.log(respuesta)
            res.json({ message: "No se pudo subir la imagen", status: false })
        }
        
    } catch (error) {
        res.json({ message: "Error de coneccion", status: false })
        
    }
})

router.post('/single/:id', async (req, res) => {

    const _id = req.params.id
    const { url } = req.body

    try {

        const respuesta = await Buildings.findOneAndUpdate({ _id }, { $push: { images: url } })
        if (respuesta) {
            res.json({ message: "success images", status: true, body: respuesta })
        }
        else {
            console.log(respuesta)
            res.json({ message: "No se pudo subir la imagen", status: false })
        }
        
    } catch (error) {
        res.json({ message: "Error de coneccion", status: false })
        
    }
})


module.exports = router;