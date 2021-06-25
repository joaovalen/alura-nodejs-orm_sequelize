'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    static associate(models) {
      Levels.hasMany(models.Turmas, {
        foreignKey: "level_id"
      })
    }
  };
  Levels.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Levels',
  });
  return Levels;
};