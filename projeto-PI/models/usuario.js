const Sequelize = require("sequelize")
const sequelize = require("../db")

const usuario = sequelize.define("usuario", {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
})

module.exports = usuario
