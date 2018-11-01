const fs = require('fs')
const nanoid = require('nanoid')
const path = require('path')

module.exports = (file) => {
  const folder = __dirname + '/../../live/upload'
  const filePath = `${folder}/${nanoid()}${path.extname(file.name)}`
  const write = () => {
    return new Promise((resolve, reject) => {
      let ws = fs.createWriteStream(filePath)
      fs.createReadStream(file.path).pipe(ws)
      ws.on('finish', resolve.bind(this, true))
      ws.on('error', e => reject(e))
    })
  }
  try {
    fs.mkdirSync(folder)
    write()
  } catch(e) {
    console.log(e)
    return Promise.reject()
  }
}
