const koaBody = require('koa-body')
const auth = require('./auth')
const cacheControl = require('./cacheControl')
const error = require('./error')
const outter = require('./outter')
const serve = require('koa-static')

module.exports = {
  mount(app) {
    app.use(outter())
    app.use(error())
    app.use(cacheControl())
    app.use(auth())
    app.use(koaBody({
      multipart: true
    }))
    app.use(serve(__dirname + '/../../live'))
    console.log('middlewares mounted')
  }
}
