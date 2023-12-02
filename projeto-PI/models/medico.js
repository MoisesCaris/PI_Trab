const Sequelize = require("sequelize")
const sequelize = require("../db")

const medico = sequelize.define("medico", {
  id_medico: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_medico: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha_medico: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  especializacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf_medico: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  crm: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email_medico: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  horario_de_abertura: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  horario_de_encerramento: {
    type: Sequelize.TIME,
    allowNull: false,
  },
})

module.exports = medico
