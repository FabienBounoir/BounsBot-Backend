const playlistBDD = require("../../models/playlist")

module.exports = async function(req, res, next){
    const playlist = await playlistBDD.find({nom: req.params.nom.toLowerCase()}).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        playlist
    })
};
