const db = require('../db-driver')
const upload = require('../utils/upload')
const { pick } = require('../utils/helper')

async function uploadFileById(id, file) {
  await upload(file)
  const data = pick(file, ['name', 'type', 'size', 'lastModifiedDate'])
  await db.get('files').updateWhere({ id }, data).write()
  return true
}

module.exports = {
  uploadFileById
}
