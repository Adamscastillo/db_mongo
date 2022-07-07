const express = require('express')
const routerUser = express.Router()

const controller = require('../controllers/userController')

routerUser.get('/all', controller.getAll)
routerUser.post('/create', controller.create)
routerUser.delete('/delete/:id', controller.delete)
routerUser.put('/update/:id', controller.update)

module.exports = routerUser
