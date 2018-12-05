const DAOs = require('../../dao')

const { CardDAO } = DAOs

module.exports = {
  mount(router) {
    router.get('/cards', async(ctx, next) => {
      ctx.body = CardDAO.getCards()
      next()
    })

    router.get('/card/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await CardDAO.getCard(id)
      next()
    })

    router.post('/card', async (ctx, next) => {
      const card = ctx.request.body
      let res = await CardDAO.addCard(card)
      ctx.body = res
      next()
    })

    router.delete('/card/:id', async(ctx, next) => {
      const { id } = ctx.params
      ctx.body = await CardDAO.removeCard(id)
      next()
    })

    router.put('/card', async(ctx, next) => {
      const card = ctx.request.body
      ctx.body = await CardDAO.updateCard(card)
      next()
    })
  }
}
