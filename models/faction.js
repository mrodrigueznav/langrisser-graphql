'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faction = sequelize.define('Faction', {
    name: DataTypes.STRING
  }, {});
  Faction.associate = function(models) {
    // associations can be defined here
    // Faction.hasMany(models.characterFaction, {as: 'characterFaction'})
    Faction.hasMany(models.characterFaction)
  }
  return Faction;
};