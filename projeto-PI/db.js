const Sequelize = require("sequilize")
const sequelize = new Sequelize("saude", "admin", "admin", {
  dialect: "mysql",
  host: "localhost",
})
module.exports = sequelize
