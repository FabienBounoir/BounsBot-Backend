const mongoose = require('mongoose');

//schema level discord
const levelSchema = new mongoose.Schema({
  identifiant: String,
  usersame: String,
  xp: Number,
  nbMessage: Number,
  picture: String,
  banniere: String,
  idserveur: String
}, {
  timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = mongoose.model('level', levelSchema);
