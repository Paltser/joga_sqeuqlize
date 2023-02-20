'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('auhtors', 'authors');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('authors', 'auhtors');
  }
};
