const { Router } = require('express')
const User = require('../controllers/User')

const router = Router()

router.get('/users', User.findAllUsers)
router.get('/users/:id', User.findOneUser)
router.post('/users', User.createUser)
router.put('/users/:id', User.updateUser)
router.delete('/users/:id', User.deleteUser)
// router.get('/users/:estudanteId/matricula/:matriculaId', User.pegaUmaMatricula)
// router.post('/users/:estudanteId/matricula', User.criarMatricula)
// router.put('/users/:estudanteId/matricula/:matriculaId', User.atualizaMatricula)
// router.delete('/users/:estudanteId/matricula/:matriculaId', User.deletaMatricula)

module.exports = router