'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kabupaten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kabupaten.belongsTo(models.provinsi, {
        as: "provinsi",
        foreignKey:{
          name: "idProvinsi",
        },
      });

    }
  }
  kabupaten.init({
    nama: DataTypes.STRING,
    diresmikan: DataTypes.STRING,
    image: DataTypes.STRING,
    idProvinsi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kabupaten',
  });
  return kabupaten;
};