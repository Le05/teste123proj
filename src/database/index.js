require('dotenv').config();

const Sequelize = require('sequelize');

// importação dos models
const User = require('../models/User');

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.host,
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        timezone: '-03:00',
        ssl: true
    },
    timezone: '-03:00'
});

User.init(connection);
module.exports = connection;