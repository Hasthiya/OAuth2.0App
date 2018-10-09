const express = require('express')

const axios = require('axios')

const clientID = 'e17f4abefd9ab4801d91'
const clientSecret = '867f4dc4c79a5d4f6590ee7b75167e4db2eb7d3e'

const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/oauth/redirect', (req, res) => {
    const requestToken = req.query.code
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
    const accessToken = response.data.access_token
    res.redirect(`/welcome.html?access_token=${accessToken}`)
  })
})

app.listen(8080)