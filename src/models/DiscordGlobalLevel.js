const mongoose = require('mongoose');


const globalUserInfo = new mongoose.Schema({
  identifiant: String,
  username: String,
  xp: Number,
  nbMessage: Number,
  banniere: String,
  picture: String,
  achievement: {
    type: Object, default: {
      nbCommande: { type: Number, default: 0 },
      dj: { type: Number, default: 0 },
      botInYouGuild: { type: Boolean, default: false },
      onBounsGuild: { type: Boolean, default: false },
      seeSecretCommand: { type: Boolean, default: false },
      customBanner: { type: Boolean, default: false },
    }
  },
  favoris: { type: Array, default: [] },
}, {
  timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = mongoose.model('userInformation', globalUserInfo);
