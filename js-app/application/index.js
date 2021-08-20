const express = require('express')
const bodyParser = require('body-parser')
const AuthMiddleware = require('./authMiddleware')
const axios = require('axios').default
const app = express()
const PORT = 8000
const querystring = require('querystring')

app.use(bodyParser.json())

app.post('/auth', (req, res) => {
  axios.post('http://localhost:8080/auth/realms/Products/protocol/openid-connect/token', querystring.stringify({
    grant_type: 'password',
    client_id: 'jsapp',
    client_secret: '641de81c-bf09-435b-aaaa-c1d4eaffcf5c',
    username: req.body.user,
    password: req.body.password
  }), { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
    .then(({data}) => res.send(data))
    .catch(err => {
      console.error(err.response)
      res.status(401).send('WRONG!')
    })
})

app.use(AuthMiddleware)
app.get('/', (_, res) => res.send("You're authenticated!"))



app.listen(PORT, () => console.log(`JS Server listening on port ${PORT}.`))