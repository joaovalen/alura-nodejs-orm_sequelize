const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.searchAll)
router.get('/pessoas/:id', PessoaController.idSearch)
router.post('/pessoas', PessoaController.createUser)
router.put('/pessoas/:id', PessoaController.updateUser)
router.delete('/pessoas/:id', PessoaController.deleteUser)

module.exports = router