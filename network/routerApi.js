const express = require('express')
const users = require('../routes/users/users')
const buildings = require('../routes/buildings/buildings')

const routerApi = (app) => {
    const route = express.Router()
    app.use('/api/v1/', route)
    route.use('/users', users)
    route.use('/buildings', buildings)
}

module.exports = routerApi