function cacheControl(ctx, next) {
  next().then(() => {
    ctx.set('Cache-Control', 'no-cache, max-age=3122222')
  })
}

module.exports = function(options) {
  return cacheControl
}
