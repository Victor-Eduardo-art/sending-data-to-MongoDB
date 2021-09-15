const db = require('./models/db')
const Users = require('./models/user')
const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
   res.sendFile(`${__dirname}/public/html/index.html`)
})

app.get('/add/:nome/:email/:bio', (req, res) => {
   Users.Users.create({
      nome: req.params.nome,
      email: req.params.email,
      bio: req.params.bio,
   }).then((teste) => {
      console.log(`Dado adicionado com Sucesso! ${teste}`)
      res.redirect('/')
   }).catch((erro) => {
      console.log(`Falha ao adicionar dado ERRO: ${erro}`)
      res.send(`Falha ao adicionar dado ERRO: ${erro}`)
   })
})

app.listen(8081, () => {
   console.log(`Servidor rodando em localhost:8081`)
})