const mongoose = require('mongoose');

const { Schema } = mongoose;

const Buildings = new Schema({
    ubicacion: { type: String, default: "", required: true },
    descripcion: { type: String, default: "", required: true },
    precio: { type: Number, default: 0, required: true },
    cantidadCuartos: { type: Number, default: 0, required: true },
    ventaAlquiler: { type: String, default: "", required: true },
    cantidadBaños: { type: Number, default: 0, required: true },
    estacionamientos: { type: Number, default: 0, required: true },
    metrosTerreno: { type: Number, default: 0, required: true },
    metrosConstruccion: { type: Number, default: 0, required: true },
    idPublicante: { type: String, default: "", required: true },
    date: { type: Date, default: Date.now, required: true }
  })

  module.exports = mongoose.model('Buildings', Buildings);