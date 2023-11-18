const Sequelize = require("sequelize")
const database = require("./db")

const Medico = database.define({
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
  email_medico: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  crm: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  epecializacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  horario_de_atendimento_abertura: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  horario_de_atendimento_encerramento: {
    type: Sequelize.TIME,
    allowNull: false,
  },
})

module.exports = Medico
