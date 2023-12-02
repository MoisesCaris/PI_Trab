const Sequelize = require("sequelize")
const sequelize = new Sequelize(
  "saude",
  "root",
  "Digita a senha do banco aqui",
  {
    dialect: "mysql",
    host: "localhost",
  }
)

module.exports = sequelize
