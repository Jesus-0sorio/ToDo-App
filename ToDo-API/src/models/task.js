const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Task = sequelize.define('Tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Task;
