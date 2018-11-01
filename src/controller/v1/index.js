const KoaRouter = require('koa-router')
const v1 = new KoaRouter({
  prefix: '/v1'
})

require('./card').mount(v1)
require('./upload').mount(v1)

module.exports = v1
