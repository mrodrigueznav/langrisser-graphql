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
   return queryInterface.bulkInsert('Characters', [{
    name: 'Ledin',
    level: 70,
    stars: 5,
    owned: 1,
    power: 5000,
    favorite: 5,
    createdAt: date,
    updatedAt: date,
  }, {
    name: 'Elwin',
    level: 70,
    stars: 5,
    owned: 1,
    power: 5000,
    favorite: 5,
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
