const mongoose = require('mongoose');

const serveurJoin = new mongoose.Schema({
    serveurId: String,
    serveurName: String,
    serveurRegion: String,
    serveurOwnerID: String
}, {
    timestamps: true,
});

//ajouter a la table message, les messages(name + message + timestamps)
module.exports = mongoose.model('serveurJoin', serveurJoin);
