const Sequelize = require('sequelize');

const sequelize = new Sequelize('usersdb2', 'root', '123456', {
  dialect: 'mysql',
  host: 'localhost',
});

sequelize
  .authenticate()
  .then(() => console.log('Connected.'))
  .catch(err => console.error('Connection error: ', err));
