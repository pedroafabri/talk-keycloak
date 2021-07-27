const express = require('express')
const AuthMiddleware = require('./authMiddleware')

const app = express()
const PORT = 8000

app.use(AuthMiddleware)
app.get('/', (_, res) => res.send("You're authenticated!"))

app.listen(PORT, () => console.log(`JS Server listening on port ${PORT}.`))