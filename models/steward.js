'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Steward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Steward.init({
    steward_id: DataTypes.INTEGER,
    store_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Steward',
  });
  return Steward;
};