const Sequelize = require('sequelize');

const sequelize = new Sequelize('usersdb2', 'sa', '123456', {
  dialect: 'mssql',
  host: 'localhost',
  port: '1433',
});

sequelize
  .authenticate()
  .then(() => console.log('Connected.'))
  .catch(err => console.error('Connection error: ', err));
