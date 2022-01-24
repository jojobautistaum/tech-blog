const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

// Database connection
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
