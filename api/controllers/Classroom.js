const database = require('../models')

class Classroom {
  static async findAllClassrooms(req, res){
    try {
      const classrooms = await database.Classrooms.findAll()
      return res.status(200).json(allClasses)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async findOneClassroom(req, res) {
    const { id } = req.params
    try {
      const clasroom = await database.Classrooms.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(classroom)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createClassroom(req, res) {
    const newClassroom = req.body
    try {
      const createdClasroom = await database.Classrooms.create(newClassroom)
      return res.status(200).json(createdClasroom)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateClassroom(req, res) {
    const { id } = req.params
    const bodyData = req.body
    try {
      await database.Classrooms.update(bodyData, { where: { id: Number(id) }})
      const updatedClassroom = await database.Classrooms.findOne( { where: { id: Number(id) }})
      return res.status(200).json(updatedClassroom)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteClassroom(req, res) {
    const { id } = req.params
    try {
      await database.Classrooms.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ message: `id ${id} deleted` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = Classroom