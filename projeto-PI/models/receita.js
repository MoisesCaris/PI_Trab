const Sequelize = require("sequelize")
const sequelize = require("../db")

const receita = sequelize.define("receita", {
  id_receita: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  resgatada: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nome_remedio: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cpf_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = receita
