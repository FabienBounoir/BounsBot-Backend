const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  identifiant: String,
  username: String,
  xp: Number,
  nbMessage: Number,
  banniere: String,
  picture: String
}, {
  timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = mongoose.model('XpUser', levelSchema);
