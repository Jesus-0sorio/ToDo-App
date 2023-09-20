const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'mysql://root:tW9pK96r5iuxbx1N2Zm6@containers-us-west-136.railway.app:6597/railway'
);


module.exports = sequelize;