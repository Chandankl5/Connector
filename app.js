require('@babel/register')

const requestParser = require('./Provider/RequestParser').default;
const Query = require('./Connect/Query').default
const Get = require('./Connect/Get').default

module.exports = {
  requestParser,
  Query,
  Get
}
