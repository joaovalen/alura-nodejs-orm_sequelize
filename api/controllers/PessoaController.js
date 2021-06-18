const database = require('../models') // o Js procura o index automaticamente

class PessoaController {
    // static faz com que não seja necessário instanciar
    static async searchAll(req, res){
        try {
            const allPeople = await database.Pessoas.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async idSearch (req,res) {
        const { id } = req.params
        try {
            const pessoa = await database.Pessoas.findOne({ 
                where: { 
                    id: Number(id) 
                }
            })
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser(req, res) {
        const bodyData = req.body 
        try {
            const newUser = await database.Pessoas.create(bodyData)
            return res.status(200).json(newUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res) {
        const bodyData = req.body
        const { id } = req.params
        try {
            await database.Pessoas.update(bodyData, {where: {id : Number(id) } })
            const updatedUser = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(updatedUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy( {where: { id: id}})
            return res.status(500).json(`Usuário de ID ${id} deletado`)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController