const {model, Schema} = require('mongoose');

const usrSchema = new Schema({
  Email: String,
  Password: String,
  UsrName: String
});

module.exports = model("Usuario", usrSchema);