module.exports = function(options) {
  return async function cacheControl(ctx, next) {
    await next()
    ctx.set('Cache-Control', 'no-cache, max-age=0, no-store')
  }
}
