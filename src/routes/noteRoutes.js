const express = require('express')
const routerNote = express.Router()

const controller = require('../controllers/noteController')

// visualizar todas as notas cadastradas
routerNote.get('/all', controller.getAll)

// cadastrar nota
routerNote.post('/create', controller.createNote)

module.exports = routerNote
