const mongoose = require('mongoose');


const guildconfig = new mongoose.Schema({
  guild: String,
  logChannel: { type: String, default: "0" },
  sheesh: { type: Boolean, default: false },
  heyreaction: { type: Boolean, default: false },
  rename: { type: Boolean, default: true },
  musique: { type: Boolean, default: true },
  radio: { type: Boolean, default: true },
  playlist: { type: Boolean, default: true },
  fun: { type: Boolean, default: true },
  game: { type: Boolean, default: true },
  idBot: { type: String, default: process.env.BOTID },
  chaineTwitch: { type: String, default: "0" },
  idChannelTwitchTchat: { type: String, default: "0" },
  raid: { type: Boolean, default: false },
  regex: { type: Array, default: [] },
  bitrateUpdate: { type: Boolean, default: false },

  welcome: {
    DM: {
      active: { type: Boolean, default: false },
      content: { type: String, default: null },
      embeds: {
        type: Array,
        default: [
          {
            description: "Hello {user} and welcome to the {server}! You are the {membercount} of the server.",
            url: null,
            color: null,
            thumbnail: null,
            image: null,
            title: null,
          },
        ]
      }
    },
    guild: {
      active: { type: Boolean, default: false },
      channel: { type: String, default: "0" },
      colorAmbiance: { type: String, default: "#D89D20" },
      colorText: { type: String, default: "#FFFFFF" },
      background: { type: String, default: "https://media.discordapp.net/attachments/1014101467126304798/1055788116486660166/image.png" },
    }
  },

  gainRolesLevels: { type: Array, default: [] },
  gainRolesLevelsSend: { type: String, default: "none" },


  logs: {
    message: { type: String, default: "0" },
    vocal: { type: String, default: "0" },
    user: { type: String, default: "0" },
    ban_unban: { type: String, default: "0" },
    join_leave: { type: String, default: "0" },
    guild: { type: String, default: "0" },
    roles: { type: String, default: "0" },
    channels: { type: String, default: "0" },
    invites: { type: String, default: "0" },
    emotes_stickers: { type: String, default: "0" },
  },

  configurationFeatures: {
    type: Array, default: [
      {
        name: "Global",
        elements: [
          {
            name: "Tableau de bord",
            url: "dashboard",
          },
          {
            name: "Logs",
            url: "logs",
          }
        ]
      },
      {
        name: "Gestion du serveur",
        elements: [
          {
            name: "Bienvenue",
            url: "welcome",
          },
        ]
      },
      {
        name: "Utilitaires",
        elements: [
          {
            name: "Envoyer un message",
            url: "guild_message",
          },
        ]
      }
    ]
  },
}, {
  timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = mongoose.model('guildConfiguration', guildconfig);
