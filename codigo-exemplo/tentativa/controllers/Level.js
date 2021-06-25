const database = require('../models')

class Level {
  static async findAllLevels(req, res){
    try {
      const levels = await database.Levels.findAll()
      return res.status(200).json(levels)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async findOneLevel(req, res) {
    const { id } = req.params
    try {
      const level = await database.Levels.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(level)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createLevel(req, res) {
    const bodyData = req.body
    try {
      const level = await database.Levels.create(bodyData)
      return res.status(200).json(level)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params
    const bodyData = req.body
    try {
      await database.Levels.update(bodyData, { where: { id: Number(id) }})
      const level = await database.Levels.findOne( { where: { id: Number(id) }})
      return res.status(200).json(level)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params
    try {
      await database.Levels.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deleted` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = Level