const playlistBDD = require("../../models/playlist")

module.exports = async function(req, res, next){
    const playlist = await playlistBDD.find({nom: {$regex: req.params.nom.toLowerCase()}}).sort({ xp: -1 }).limit(100).skip(100 * req.query.page).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        playlist
    })
};
