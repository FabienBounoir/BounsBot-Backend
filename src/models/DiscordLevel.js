const mongoose = require('mongoose');


const levelSchema = new mongoose.Schema({
  identifiant: String,
  username: String,
  xp: { type: Number, default: 0 },
  nbMessage: { type: Number, default: 0 },
  picture: String,
  banniere: String,
  idserveur: String,
  idBot: { type: String, default: "1012688780471308339" },
}, {
  timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = mongoose.model('guildLevel', levelSchema);
