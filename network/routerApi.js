const express = require('express')

const users = require('../routes/users/users')
const routerApi = (app) => {
    const route = express.Router()
    app.use('/api/v1/', route)
    route.use('/users', users)
}

module.exports = routerApi