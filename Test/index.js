require('@babel/register')

const requestParser = require('../app').requestParser
const Test = require('./Test').Test
const Test1 = require('./Test').Test1


var express = require('express')
var app = express();

app.use(requestParser)

app.use('/test', (req, res, next) => {
  console.log('Test', Test.query)
  next()
})

app.use('/test1', (req, res, next) => {
  console.log('Test1', Test1.query)
  next()
})

app.listen(2000)

