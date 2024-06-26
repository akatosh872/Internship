'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    deputy_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    busy: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {});
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Deputy, { foreignKey: 'deputy_id' });
    Schedule.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Schedule;
};