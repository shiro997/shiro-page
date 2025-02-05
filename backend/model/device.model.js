const {model, Schema} = require('mongoose');

const DeviceSchema = new Schema({
  Name: String,
  Id: String
});

module.exports = model("Dispositivo", DeviceSchema);