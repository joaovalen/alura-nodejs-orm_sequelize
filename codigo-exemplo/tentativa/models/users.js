'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Classrooms, {
        foreignKey: 'teacher_id'
      })
      Users.hasMany(models.Registers, {
        foreignKey: 'student_id'
      })
    }
  };
  Users.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};