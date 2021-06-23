const { Router } = require('express')
const Classroom = require('../controllers/Classroom')

const router = Router()

router
 .get('/Classrooms', Classroom.findAllClassrooms)
 .get('/Classrooms/:id', Classroom.findOneClassroom)
 .post('/Classrooms', Classroom.createClassroom)
 .put('/Classrooms/:id', Classroom.updateClassroom)
 .delete('/Classrooms/:id', Classroom.deleteClassroom)

module.exports = router