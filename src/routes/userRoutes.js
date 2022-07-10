const express = require('express')
const routerUser = express.Router()

const UserController = require('../controllers/UserController')

routerUser.get('/all', new UserController().getAll)
routerUser.post('/create', new UserController().create)
routerUser.delete('/delete/:id', new UserController().delete)
routerUser.put('/update/:id', new UserController().update)

module.exports = routerUser
