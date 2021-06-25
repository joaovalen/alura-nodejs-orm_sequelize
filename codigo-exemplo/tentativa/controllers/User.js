const database = require('../models')

class User {
  static async findAllUsers(req, res){  
    try {
      const users = await database.Users.findAll()
      return res.status(200).json(users)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async findOneUser(req, res) {  
    const { id } = req.params
    try {
      const user = await database.Users.findOne({ id })
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createUser(req, res) {  
    const bodyData = req.body
    try {
      const user = await database.Users.create(bodyData)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateUser(req, res) {  
    const { id } = req.params
    const bodyData = req.body
    try {
      await database.Users.atualizaRegistro(bodyData, Number(id))
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteUser(req, res) {  
    const { id } = req.params
    try {
      await database.Users.apagaRegistro(Number(id))
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // -------------------------------------------------------------------------------------------






  static async restaurauser(req, res) {  
    const { id } = req.params
    try {
      const registroRestaurado = await database.Users
        .restauraRegistro(Number(id))
      return res.status(200).json(registroRestaurado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaMatriculas(req, res) {  
    const { estudanteId } = req.params
    try {
      const matriculas = await database.Users
        .pegaMatriculasPorEstudante({ id: Number(estudanteId) })
      return res.status(200).json(matriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelauser(req, res) {  
    const { estudanteId } = req.params
    try {
      await database.Users.cancelauserEMatriculas(Number(estudanteId))
      return res
        .status(200)
        .json({message: `matrículas ref. estudante ${estudanteId} canceladas`}) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = User