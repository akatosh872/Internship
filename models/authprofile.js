'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const AuthProfile = sequelize.define('AuthProfile', {
    user_id: DataTypes.INTEGER,
    profile_data: DataTypes.JSON
  }, {});
  AuthProfile.associate = function(models) {
    AuthProfile.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return AuthProfile;
};
