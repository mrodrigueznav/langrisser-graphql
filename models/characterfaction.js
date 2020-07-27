'use strict';
module.exports = (sequelize, DataTypes) => {
  const characterFaction = sequelize.define('characterFaction', {
  }, {});
  characterFaction.associate = function(models) {
    // associations can be defined here
    characterFaction.belongsTo(models.Faction)
    characterFaction.belongsTo(models.Character)
    // characterFaction.belongsTo(models.Faction, { foreignKey: 'factionId' })
    // characterFaction.belongsTo(models.Character, {
    //   foreignKey: 'characterId',
    // });
    // characterFaction.hasOne(models.Faction)
  };
  return characterFaction;
};