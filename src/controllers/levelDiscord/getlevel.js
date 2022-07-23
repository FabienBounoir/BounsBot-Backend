const Level = require("../../models/DiscordLevel")
const GuildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    const rank = await Level.find({ idserveur: req.params.id }).sort({ xp: -1 }).limit(100).skip(100 * req.query.page).exec()
    const role = await GuildConfig.findOne({ guild: req.params.id, idBot: process.env.BOTID }, { gainRolesLevels: -1 }).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        rank,
        levelsRole: role?.gainRolesLevels || []
    })
};
