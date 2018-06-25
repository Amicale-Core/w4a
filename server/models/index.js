'use strict';

const
fs = require('fs'),
Sequelize = require('sequelize');

// create Sequelize instance
const sequelize = new Sequelize('w4a_tp_note', 'hodiesne', '1234', {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	operatorsAliases: false
	// logging: false
});

const db = {};

fs.readdirSync(__dirname)
.filter((filename) => filename !== 'index.js')
.forEach((filename) => {
	const model = sequelize.import('./' + filename);
	db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
	db[modelName].associate(db);
});

sequelize.sync();

module.exports = db;
