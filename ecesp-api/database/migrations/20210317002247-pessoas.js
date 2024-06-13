'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      nome: {
        type: Sequelize.STRING(105),
        allowNull: false
      },
      nascimento: {
        type: Sequelize.DATEONLY(),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(105),
        allowNull: false 
      },
      telefone: {
        type: Sequelize.STRING(45),
        allowNull: false              
      },
      igreja: {
        type: Sequelize.STRING(45)
      },
      curso: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      cep: {
        type: Sequelize.INTEGER(11)
      },
      dataCriacao: {
        type: Sequelize.DATE,
        field: 'data_criacao'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('pessoas');
    
  }
};
