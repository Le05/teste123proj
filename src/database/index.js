require('dotenv').config();

const Sequelize = require('sequelize');

// importação dos models
const User = require('../models/User');

const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.host || 'ec2-174-129-252-252.compute-1.amazonaws.com',
    username: process.env.user || 'qmdtpmuiojwxrd',
    password: process.env.password || 'c1ba3a792ba5cae2980d8a7c938a0a755404d3b0ca982bb7719a1c4abd699e4a',
    database: process.env.database || 'd9eb47gr6u9k44',
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        timezone: '-03:00',
        ssl: false
    },
    timezone: '-03:00'
});

User.init(connection);
module.exports = connection;