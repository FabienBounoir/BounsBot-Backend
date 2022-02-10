const mongoose = require('mongoose');


const guildconfig = new mongoose.Schema({
  guild: String,
  logChannel: { type: String, default: "0" },
  chaineTwitch: { type: String, default: "0" },
  idChannelTwitchTchat: { type: String, default: "0" },
  sheesh: { type: Boolean, default: false },
  heyreaction: { type: Boolean, default: false },
  rename: { type: Boolean, default: true },
  musique: { type: Boolean, default: true },
  radio: { type: Boolean, default: true },
  playlist: { type: Boolean, default: true },
  fun: { type: Boolean, default: true },
  idBot: { type: String, default: "806105506883960853" },
  welcomeActive: { type: Boolean, default: false },
  welcomeMessage: { type: String, default: "Bonjour {user} et bienvenue sur le serveur {server} ! Tu es le {membercount}ème membre du serveur." },
}, {
  timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = mongoose.model('ConfigGuild', guildconfig);