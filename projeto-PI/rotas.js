const express = require("express")
const consulta = require("./models/consulta")
const rotas = express.Router()
const receita = require("./models/receita")
const medico = require("./models/medico")
const farmaceutico = require("./models/farmaceutico")
const atestado = require("./models/atestado")

var bodyParser = require("body-parser")

const usuario = require("./models/usuario")

rotas.use(bodyParser.json())
rotas.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

rotas.post("/registromedico", async (req, res) => {
  const novoMedico = req.body
  await medico.create(novoMedico)
  res.render("index")
})

rotas.get("/testgetmed", async (req, res) => {
  try {
    const medicos = await medico.findAll()
    res.status(201).json(medicos)
  } catch (error) {
    throw error
  }
})
rotas.get("/testgetates", async (req, res) => {
  try {
    const atestados = await atestado.findAll()
    res.status(201).json(atestados)
  } catch (error) {
    throw error
  }
})

rotas.get("/testgetus", async (req, res) => {
  try {
    const usuarios = await usuario.findAll()
    res.status(201).json(usuarios)
  } catch (error) {
    throw error
  }
})
rotas.get("/testgetates", async (req, res) => {
  try {
    const atestados = await atestado.findAll()
    res.status(201).json(atestados)
  } catch (error) {
    throw error
  }
})

rotas.post("/logadomedico", async (req, res) => {
  const { cpf_medico, senha_medico } = req.body

  const medico_usuario = await medico.findOne({
    where: {
      cpf_medico: cpf_medico,
      senha_medico: senha_medico,
    },
  })
  if (medico_usuario) {
    res.render("logado")
  } else {
    res.status(401).send("Não é valido")
  }
})

rotas.get("/registraratestado", (req, res) => {
  res.render("registroatestado")
})

rotas.post("/atestadoregistrado", async (req, res) => {
  const novoAtestado = req.body
  await atestado.create(novoAtestado)
  res.render("logado")
})

rotas.post("/registrousuario", async (req, res) => {
  const novoUsuario = req.body
  await usuario.create(novoUsuario)
  res.render("index")
})

rotas.post("/consulta", async (req, res) => {
  const novaConsulta = req.body
  await consulta.create(novaConsulta)
  res.render("logado")
})
rotas.get("/testgetcons", async (req, res) => {
  try {
    const consultas = await consulta.findAll()
    res.status(201).json(consultas)
  } catch (error) {
    throw error
  }
})
rotas.get("/registrarconsulta", (req, res) => {
  res.render("consulta")
})

rotas.get("/registrarreceita", (req, res) => {
  res.render("receita")
})

rotas.post("/receita", async (req, res) => {
  const novaReceita = req.body
  await receita.create(novaReceita)
  res.render("logado")
})
rotas.get("/testgetrec", async (req, res) => {
  try {
    const receitas = await receita.findAll()
    res.status(201).json(receitas)
  } catch (error) {
    throw error
  }
})

rotas.get("/registrarfarmaceutico", (req, res) => {
  res.render("farmaceutico")
})

rotas.post("/registrofarmaceutico", async (req, res) => {
  const novoFarmaceutico = req.body
  await farmaceutico.create(novoFarmaceutico)
  res.render("index")
})
rotas.get("/testgetfar", async (req, res) => {
  try {
    const farmaceuticos = await farmaceutico.findAll()
    res.status(201).json(farmaceuticos)
  } catch (error) {
    throw error
  }
})

rotas.get("/loguinfarmacia", (req, res) => {
  res.render("logfarmacia")
})
rotas.get("/loguinmedicos", (req, res) => {
  res.render("index")
})

rotas.post("/logadofarmaceutico", async (req, res) => {
  const { cpf_farmaceutico, senha_farmaceutico } = req.body

  const farmaceutico_usuario = await farmaceutico.findOne({
    where: {
      cpf_farmaceutico: cpf_farmaceutico,
      senha_farmaceutico: senha_farmaceutico,
    },
  })
  if (farmaceutico_usuario) {
    res.render("logadofarmacia")
  } else {
    res.status(401).send("Não é valido")
  }
})

rotas.post("/pesquisafarmacia", async (req, res) => {
  const { cpf_usuario } = req.body
  const pesquisa_cpf = await receita.findAll({
    where: {
      cpf_usuario: cpf_usuario,
    },
  })
  if (pesquisa_cpf) {
    res.render("pesquisadofarmacia", { pesquisa_cpf })
  } else {
    res.status(401).send("Não é valido")
  }
})

rotas.put("/atualizar/:id", async (req, res) => {
  const receitaId = req.params.id
  const { resgatada } = req.body

  try {
    const receitaAtualizada = await receita.update(
      {
        resgatada: resgatada,
      },
      {
        where: {
          id_receita: receitaId,
        },
      }
    )

    if (!receitaAtualizada) {
      return res.status(404).json({ mensagem: "Receita não encontrada." })
    }

    return res.status(200).json({ mensagem: "Receita atualizada com sucesso." })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
})
module.exports = rotas
