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
    return queryInterface.bulkInsert('Factions', [{
     name: 'Legion of Glory',
     createdAt: date,
     updatedAt: date,
   }, {
     name: 'Empire',
     createdAt: date,
     updatedAt: date,
   }, {
    name: 'Protagonists',
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
