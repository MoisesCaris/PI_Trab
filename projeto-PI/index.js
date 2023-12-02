const express = require("express")
const path = require("path")
var bodyParser = require("body-parser")
const app = express()
const rotas = require("./rotas")
const sequelize = require("./db")

sequelize.sync().then(() => {
  console.log("Banco conectado")
})

app.use(rotas)

const users = [
  { cpf: "teste1", pass: "senha1" },
  { cpf: "teste2", pass: "senha2" },
]

//app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(3333, () => {
  console.log("Server on")
})

app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
app.use("/public", express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("logins")
})

app.get("/registrar", (req, res) => {
  res.render("tiporegistro")
})

app.get("/registrarmedico", (req, res) => {
  res.render("registro")
})
app.get("/registrarusuario", (req, res) => {
  res.render("registrousuario")
})
