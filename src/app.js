const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

require('dotenv-safe').config() // inicializar a conexão com o banco de dadosconst
const db = require('./dataBase/mongoConfig')
db.connect()

noteRoutes = require('../src/routes/noteRoutes')
userRoutes = require('../src/routes/userRoutes')

app.use('/notes', noteRoutes)
app.use('/users', noteRoutes)

module.exports = app
