const app = require('./src/config/express')
const PORT = process.env.PORT

app.listen(PORT, async () => {
    console.table({
        "Server-Health": {
            Apllication:"Express",
            Status: "Online",
            Port: PORT
        },
    })
})