'use strict'

const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Minha primeira aplicação',
        version: '0.0.2'
    })
})
const route2 = router.post('/', (req, res, next) => {
    
    let body = req.body
    
    res.status(200).json({
        data: body
    })
})

app.use('/', route)
app.use('/', route2)

module.exports = app