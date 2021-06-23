const { Router } = require('express')
const Level = require('../controllers/Level')

const router = Router()
router
 .get('/levels', Level.findAllLevels)
 .get('/levels/:id', Level.findOneLevel)
 .post('/levels', Level.createLevel)
 .put('/levels/:id', Level.updateLevel)
 .delete('/levels/:id', Level.deleteLevel)

module.exports = router