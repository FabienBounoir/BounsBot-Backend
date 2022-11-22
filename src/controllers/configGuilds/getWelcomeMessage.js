const guildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    let welcomeConfig = await guildConfig.findOne({ guild: req.params.id, idBot: process.env.BOTID }, { _id: 0, guild: 1, welcomeActive: 1, welcomeMessage: 1 }).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.status(200).json(
        welcomeConfig
    )
};