const express = require('express')
const app = express()
const cors = require('cors')
const routes = require("./routes")

app.use(cors())
app.use(express.json())

require("./routes")(app);

require('dotenv-safe').config() // inicializar a conexão com o banco de dadosconst
const db = require('./dataBase/connection')
db.connect()


module.exports = app
