const guildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    let welcomeConfig = await guildConfig.findOne({ guild: req.params.id, idBot: process.env.BOTID }, { _id: 0, guild: 1, welcome: 1 }).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (!welcomeConfig) return res.status(404).json({
        "success": false,
        "message": "Guild not found"
    })

    res.status(200).json({
        guild: welcomeConfig?.guild,
        DM: {
            ...welcomeConfig?.welcome?.DM
        },
        GUILD: {
            ...welcomeConfig?.welcome?.guild
        }
    })
};