const express = require('express')
const router = express.Router()

const controller = require('../controllers/noteController')

// visualizar todas as notas cadastradas
router.get('/all', controller.getAll)

// cadastrar nota
router.post('/create', controller.createNote)

module.exports = router
