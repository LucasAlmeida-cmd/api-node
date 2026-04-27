const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api-node', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false 
});

module.exports = sequelize;