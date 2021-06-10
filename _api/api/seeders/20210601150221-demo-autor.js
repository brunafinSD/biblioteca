'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Autores', [{
      nome: 'Mario Quintana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Thiago Nigro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Eduardo Ferraz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Augusto Cury',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Osho',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Autores', null, {});

  }
};
