'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Deputy = sequelize.define('Deputy', {
    name: DataTypes.STRING,
    biography: DataTypes.TEXT,
    faction_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    telegram: DataTypes.STRING,
    street: DataTypes.STRING,
    area: DataTypes.STRING,
    date_of_entry: DataTypes.DATE
  }, {});
  Deputy.associate = function(models) {
    Deputy.belongsTo(models.Faction, { foreignKey: 'faction_id' });
    Deputy.hasMany(models.Schedule, { foreignKey: 'deputy_id' });
  };
  return Deputy;
};