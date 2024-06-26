'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Faction = sequelize.define('Faction', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Faction.associate = function(models) {
    Faction.hasMany(models.Deputy, { foreignKey: 'faction_id' });
  };
  return Faction;
};