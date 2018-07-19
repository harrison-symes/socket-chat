const db = require('./connection')

const getGameById = (id, testDb) => (testDb || db)('games')
  .where({id})
  .first()

module.exports = {
  getPendingGames: (testDb) => (testDb || db)('games')
    .where({is_started: false, is_ended: false}),
  createGame: (game, testDb) => (testDb || db)('games')
    .insert(game, 'id')
    .then(id => getGameById(id[0])),
  startGame: (id, testDb) => (testDb || db)('games')
    .where({id})
    .update({is_started: true})
    .then(() => getGameById(id[0])),
  endGame: (id, testDb) => (testDb || db)('games')
    .where({id})
    .update({is_ended: true})
    .then(() => getGameById(id[0])),
  changeName: (id, name, testDb) => (testDb || db)('games')
    .where({id})
    .update({name})
    .then(() => getGameById(id))
}
