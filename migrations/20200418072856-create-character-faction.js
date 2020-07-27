'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('characterFactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      characterId: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
       model: 'characters', // name of Target model
       key: 'id', // key in Target model that we're referencing
       as: 'characterId'
       },
      },
      factionId: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
       model: 'factions', // name of Target model
       key: 'id', // key in Target model that we're referencing
       as: 'factionId'
       },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('characterFactions');
  }
};