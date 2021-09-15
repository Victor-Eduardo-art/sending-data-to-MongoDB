 const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/bilo').then(() => {
    console.log(`MongoDB conectado...`)
 }).catch((erro) => {
    console.log(`Falha ao se conectar no MongoDB ERRO: ${erro}`)
 })

 module.exports = mongoose