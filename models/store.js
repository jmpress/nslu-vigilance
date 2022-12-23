'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Store.init({
    name: DataTypes.STRING,
    abbr: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    fax_number: DataTypes.STRING,
    store_manager: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};