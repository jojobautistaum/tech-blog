const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'jaime',
    email: 'jaime.vega@live.com',
    password: 'password123'
  },
  {
    username: 'bella',
    email: 'bella.lim@invent.net',
    password: 'password123'
  },
  {
    username: 'amboy',
    email: 'amboy.bajo@last.fm',
    password: 'password123'
  },
  {
    username: 'eden',
    email: 'eden.tomas@jeepney.org',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
