const { UploadService } = require('../../service')

module.exports = {
  mount(router) {
    // 单文件上传
    router.post('/upload/:id', async (ctx, next) => {
      const { id } = ctx.params
      const file = ctx.request.files.file
      try {
        let data = await UploadService.uploadFileById(id, file)
        ctx.body = ctx.returnWrapper({ data })
      } catch (e) {
        console.log(e)
        ctx.body = ctx.returnWrapper({ success: false, reason: '上传失败' })
      }
      await next()
    })
  }
}
