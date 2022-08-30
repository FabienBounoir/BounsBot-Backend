const mongoose = require('mongoose');


const playlist = new mongoose.Schema({
    owner: String,
    ownerName: String,
    nom: { type: String, index: true, default: "Playlist" },
    idPlaylistSpotify: { type: String, default: null, index: true, unique: true },
    musique: { type: Array, default: [] },
    picture: { type: String, default: "https://media.discordapp.net/attachments/806282416364585062/1010654135122665563/noPicture.png" }
}, {
    timestamps: true,
});

module.exports = mongoose.model('playlist', playlist);
