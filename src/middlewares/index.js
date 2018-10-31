const koaBody = require('koa-body')
const auth = require('./auth')
const cacheControl = require('./cacheControl')
const error = require('./error')

module.exports = {
  mount(app) {
    app.use(error())
    app.use(cacheControl())
    app.use(auth())
    app.use(koaBody())
    console.log('middlewares mounted')
  }
}
