const Sequelize = require("sequelize")
const sequelize = require("../db")

const atestado = sequelize.define("atestado", {
  id_atestado: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tempo_atestado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf_usuario: {
    type: Sequelize.STRING,
    allowNull: true,
  },
})
module.exports = atestado
