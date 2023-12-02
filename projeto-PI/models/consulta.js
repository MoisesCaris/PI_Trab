const Sequelize = require("sequelize")
const sequelize = require("../db")

const consulta = sequelize.define("consulta", {
  id_consulta: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_doenca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = consulta
