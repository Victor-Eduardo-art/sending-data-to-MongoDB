const db = require('./db')
const schema = new db.Schema({
   nome: String,
   email: String,
   bio: String
})
const Users = db.model('user', schema)

module.exports = {
   schema: schema,
   Users: Users
}