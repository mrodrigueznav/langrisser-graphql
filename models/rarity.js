'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rarity = sequelize.define('Rarity', {
    description: DataTypes.STRING
  }, {});
  Rarity.associate = function(models) {
    // associations can be defined here
  };
  return Rarity;
};