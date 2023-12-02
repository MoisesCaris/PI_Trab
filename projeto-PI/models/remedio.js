const Sequelize = require("sequelize")
const sequelize = require("../db")

const remedio = sequelize.define("remedio", {
  id_remedio: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_remedio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = remedio
