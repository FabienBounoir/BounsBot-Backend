const playlistBDD = require("../../models/playlist")

module.exports = async function(req, res, next){
    const playlist = await playlistBDD.find({nom: {$regex: req.params.nom.toLowerCase()}}).limit(20).skip(20 * req.query.page).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        playlist
    })
};
