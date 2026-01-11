require('dotenv').config();

const db_uri = process.env.DB_URI;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
 db_uri,
  {
    dialect: 'postgres',
  }
);

module.exports = sequelize;
