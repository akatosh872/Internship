'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Schedule, { foreignKey: 'user_id' });
    User.hasOne(models.AuthProfile, { foreignKey: 'user_id' });
  };
  return User;
};
