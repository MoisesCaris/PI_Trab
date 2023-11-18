const express = require("express")
const path = require("path")
var bodyParser = require("body-parser")
const app = express()
const cors = require("cors")

const users = [
  { cpf: "teste1", pass: "senha1" },
  { cpf: "teste2", pass: "senha2" },
]

const medico = [
  {
    cpf: "teste1",
    pass: "senha1",
    nome: "teste1",
    email: "teste1",
    crm: "teste1",
    especializacao: "teste",
  },
  {
    cpf: "teste2",
    pass: "senha2",
    nome: "teste1",
    email: "teste1",
    crm: "teste1",
    especializacao: "teste",
  },
]

app.use(cors())
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
  res.render("registro")
})

app.post("/login", (req, res) => {
  users.push(req.body.cpf, req.body.pass)
  console.log(req.body)
})

app.post("/registromedico", (req, res) => {
  medico.push(
    req.body.cpf,
    req.body.pass,
    req.body.nome,
    req.body.crm,
    req.body.especializacao
  )
  console.log(medico)
})
