const mongoose = require('mongoose');

var userDB = process.env.USERDB;
var passwordDB = process.env.PASSWORDDB;

//connection BDD twitch
const twitchConnection = mongoose.createConnection(`mongodb+srv://${userDB}:${passwordDB}@twitchbot.ghjho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


const levelSchema = new mongoose.Schema({
  identifiant: String,
  xp: Number,
  nbMessage: Number,
  username: String,
  chaine: String
}, {
  timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = twitchConnection.model('XpUser', levelSchema);
