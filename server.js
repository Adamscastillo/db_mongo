const app = require('./src/application')
const PORT = process.env.PORT

app.listen(PORT, () => console.log('Servidor rodando na porta' + PORT))
