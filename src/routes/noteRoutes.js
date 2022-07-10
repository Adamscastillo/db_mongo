const express = require('express')
const routerNote = express.Router()

const NoteController = require('../controllers/NoteController')

// visualizar todas as notas cadastradas
routerNote.get('/all', new NoteController().getAll)

// cadastrar nota
routerNote.post('/create', new NoteController().create)

module.exports = routerNote
