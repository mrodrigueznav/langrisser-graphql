'use strict';
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    stars: DataTypes.INTEGER,
    owned: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    favorite: DataTypes.INTEGER
  }, {});
  Character.associate = function(models) {
    // associations can be defined here
    Character.hasMany(models.characterFaction)
 }
  return Character;
};