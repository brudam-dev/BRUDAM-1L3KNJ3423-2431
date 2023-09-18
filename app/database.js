const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api', 'root', 'password', {
  host: 'dbApp',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
