const guildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    let welcomeConfig = await guildConfig.find({ guild: req.params.id, idBot: process.env.BOTID }, { welcomeActive: 1, welcomeMessage: 1 }).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');

    welcomeConfig = welcomeConfig[0]
    res.status(200).json({
        welcomeConfig
    })
};