const db = require('../db-driver')

function getCards() {
  return db.get('cards')
}

function getCard(id) {
  return db.get('cards').find({ id }).value()
}

function addCard(card) {
  if (!card) return
  return db.get('cards').insert(card).write()
}

function removeCard(id) {
  if (!id) return
  return db.get('cards').removeById(id).write()
}

function updateCard(card) {
  if (!card) return
  return db.get('cards').updateWhere({ id: card.id }, card).write()
}

module.exports = {
  getCards,
  getCard,
  addCard,
  removeCard,
  updateCard
}
