'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ulpdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ulpdata.init({
    submitted_by: DataTypes.INTEGER,
    subsec1: DataTypes.BOOLEAN,
    subsec2: DataTypes.BOOLEAN,
    subsec3: DataTypes.BOOLEAN,
    subsec4: DataTypes.BOOLEAN,
    subsec5: DataTypes.BOOLEAN,
    subsec6: DataTypes.BOOLEAN,
    subsec7: DataTypes.BOOLEAN,
    date_of_incident: DataTypes.STRING,
    staff_witnesses: DataTypes.STRING,
    offending_manager: DataTypes.STRING,
    incident_summary: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Ulpdata',
  });
  return Ulpdata;
};