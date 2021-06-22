const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.searchAll)
router.get('/pessoas/:id', PessoaController.idSearch)
router.post('/pessoas', PessoaController.createUser)
router.put('/pessoas/:id', PessoaController.updateUser)
router.delete('/pessoas/:id', PessoaController.deleteUser)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)

module.exports = router