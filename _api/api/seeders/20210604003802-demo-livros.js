'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Livros', [{
      titulo: 'Armadilhas da mente',
      status: false,
      observacoes: 'uma boa leitura',
      ano: 2015,
      AutoreId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Mulheres inteligentes, relações saudáveis',
      status: false,
      observacoes: 'uma boa leitura',
      ano: 2015,
      AutoreId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Poesias',
      status: false,
      observacoes: 'uma boa leitura',
      ano: 1987,
      AutoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Do mil ao milhão sem cortar o cafezinho',
      status: false,
      observacoes: 'uma boa leitura',
      ano: 2015,
      AutoreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Seja a pessoa certa no lugar certo',
      status: false,
      observacoes: 'uma boa leitura',
      ano: 2015,
      AutoreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Confiança',
      status: false,
      observacoes: 'uma boa leitura',
      ano: 2015,
      AutoreId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Autores', null, {});

  }
};
