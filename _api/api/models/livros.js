'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Livros.belongsTo(models.Autores, {
        foreignKey: "AutoreId",
      });
    }
  };
  Livros.init({
    titulo: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    observacoes: DataTypes.STRING,
    ano: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Livros',
  });
  return Livros;
};