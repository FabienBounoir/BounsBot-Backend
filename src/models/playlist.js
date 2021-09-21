const mongoose = require('mongoose');

const playlist = new mongoose.Schema({
    owner: String,
    nom: { type: String, index: true },
    musique: Array,
}, {
    mestamps: true,
});

module.exports = mongoose.model('Playlist', playlist);
