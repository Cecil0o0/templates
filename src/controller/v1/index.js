const KoaRouter = require('koa-router')
const CardController = require('./card')
const v1Router = new KoaRouter({
  prefix: '/v1'
})

CardController.mount(v1Router)

module.exports = v1Router
