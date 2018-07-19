const router = require('express').Router()
const gamesDb = require('../db/games')

router.get('/', (req, res) => {
  gamesDb.getPendingGames()
    .then(games => res.json(games))
})

router.post('/', (req, res) => {
  gamesDb.createGame(req.body)
    .then(game => res.json(game))
})

router.put('/:id/start', (req, res) => {
  gamesDb.startGame(req.params.id)
    .then(game => res.json(game))
})

router.put('/:id/end', (req, res) => {
  gamesDb.endGame(req.params.id)
    .then(game => res.json(game))
})

router.put('/:id/name', (req, res) => {
  console.log(req.params.id, req.body);
  gamesDb.changeName(req.params.id, req.body.name)
    .then(game => res.json(game))
})

module.exports = router
