'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const date = new Date();
    return queryInterface.bulkInsert('characterFactions', [{
     characterId: 1,
     factionId: 1,
     createdAt: date,
     updatedAt: date,
   }, {
    characterId: 1,
    factionId: 3,
    createdAt: date,
    updatedAt: date,
   }, {
    characterId: 2,
    factionId: 1,
    createdAt: date,
    updatedAt: date,
   }, {
    characterId: 2,
    factionId: 2,
    createdAt: date,
    updatedAt: date,
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
