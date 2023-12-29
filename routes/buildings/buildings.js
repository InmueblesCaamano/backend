const express = require('express')
const router = express.Router()
const Buildings = require('./buildingsModel')

//obtener todos los inmuebles
router.get('/', async (req, res) => {
    const response = await Buildings.find()
    res.json({ message: "success", status: true, body: response })
})

//obtener 1 inmueble
router.get('/:id', (req, res) => {
    const id = req.params.id
    Buildings.findById(id).then(response => {
        res.json({ message: "success", status: true, body: response })
    }).catch(error => {
        res.json({ message: "error", status: false, body: error })
    })

})

//publicar un inmuebles
router.post('/', async (req, res) => {
    try {
        const body = {
            municipios: req.body.municipios,
            parroquias: req.body.parroquias,
            descripcion: req.body.descripcion,
            precio: Number(req.body.precio),
            cantidadCuartos: Number(req.body.cantidadCuartos),
            ventaOAlquiler: req.body.ventaOAlquiler,
            cantidadBanos: Number(req.body.cantidadBanos),
            cantidadEstacionamientos: Number(req.body.cantidadEstacionamientos),
            metrosTerreno: Number(req.body.metrosTerreno),
            metrosConstruccion: Number(req.body.metrosConstruccion),
            idPublicante: req.body.idPublicante,
            tipo: req.body.tipo,
            tel: req.body.tel,
            ws: req.body.ws,
            publish: req.body.publish
        }

        const response = await Buildings(body).save()

        res.json({ message: "success", status: true, body: response })
    } catch (error) {
        res.json({ message: "Error en la base de datos", status: false, body: {} })
    }
})

//editar un inmuebles
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body
    console.log(data)
    const modifyData = {
        tipo: data.tipo,
        descripcion: data.descripcion,
        precio: data.precio,
        parroquias: data.parroquias,
        descripcion: data.descripcion,
        cantidadCuartos: data.cantidadCuartos,
        ventaOAlquiler: data.ventaOAlquiler,
        cantidadBanos: data.cantidadBanos,
        cantidadEstacionamientos: data.cantidadEstacionamientos,
        metrosTerreno: data.metrosTerreno,
        metrosConstruccion: data.metrosConstruccion,
        tel: data.tel,
        ws: data.ws
    }
    try {
        const response = await Buildings.findOneAndUpdate({ _id: id }, modifyData)
        if (response) {
            res.json({ message: "success", status: true, response })
        } else {
            res.json({ message: "Propiedad no encontrada", status: false })
        }
    } catch (error) {
        res.json({ message: "Error", status: false })
    }
})

//hacer visible un inmueble
router.put('/publish/:id', async (req, res) => {
    const id = req.params.id
    try {
        const building = await Buildings.findOne({ _id: id })
        const response = await Buildings.findOneAndUpdate({ _id: id }, { publish: !building.publish })
        if (response) {
            res.json({ message: "success", status: true, response })
        } else {
            res.json({ message: "Propiedad no encontrada", status: false })
        }
    } catch (error) {
        res.json({ message: "Error", status: false })
    }
})

router.delete('/:id', async (req, res) => {
    //eliminar un inmuebles

    const response = await Buildings.findOneAndDelete({ _id: req.params.id })
    if (response) {
        res.json({ message: "success", status: true, body: response })
    } else {
        res.json({ message: "error", status: false, body: {} })
    }
    res.end()
})

router.delete('/deleteone/:id/:index', async (req, res) => {
    //eliminar un inmuebles
    const { index, id } = req.params
    const building = await Buildings.findOne({ _id: id })
    const images = building.images
    const newImages = images.filter((image, i) => index != i && image)
    console.log(images, ' =====')
    console.log(newImages)
    const response = await Buildings.findOneAndUpdate({ _id: req.params.id }, { images: newImages })
    if (response) {
        res.json({ message: "success", status: true, body: response })
    } else {
        res.json({ message: "error", status: false, body: {} })
    }
    res.end()
})

module.exports = router;