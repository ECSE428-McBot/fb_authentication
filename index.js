'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('test_token')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'EAAFJaTQTZCAgBABia8f4DSvVlbXRHPcZCBqp18OZCwPTsss6iQ88QIQsDTq1137AlkQ7hT023Bta8DPtiV3MA9aadKpfMjf6qzlEAKzP5XWZCOTlLFbLthxWp8JznToiLT5GqsGWYmN5Sub52mByZC7WZCeYFX4apNwbopyDS6YwZDZD') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})