const Level = require("../../models/TwitchLevel")

module.exports = async function(req, res, next){
    const rank = await Level.find({chaine:"#"+req.params.id}).sort({ xp: -1 }).limit(100).skip(100 * req.query.page).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        rank
    })
};
