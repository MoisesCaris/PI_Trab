const Sequelize = require("sequelize")
const sequelize = require("../db")

const farmaceutico = sequelize.define("farmaceutico", {
  id_farmaceutico: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_farmaceutico: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha_farmaceutico: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf_farmaceutico: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email_farmaceutico: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
})

module.exports = farmaceutico
