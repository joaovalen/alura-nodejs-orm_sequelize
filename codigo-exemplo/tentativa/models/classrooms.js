'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classrooms extends Model {
    static associate(models) {
        Classrooms.hasMany(models.Registers, {
          foreignKey: 'classroom_id'
        })
        Classrooms.belongsTo(models.Users, {
          foreignKey: 'teacher_id'
        })
        Classrooms.belongsTo(models.Levels, {
          foreignKey: 'nivel_id'
        })
    }
  };
  Classrooms.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classrooms',
  });
  return Classrooms;
};