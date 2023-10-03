const Sequelize = require("sequelize");
const connection = new Sequelize("ingrid", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection