'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // define association here
    }
  }
  Author.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author'
  });
  return Author;
};
