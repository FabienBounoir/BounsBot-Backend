const guildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    const guild = await guildConfig.find({ guild: req.params.id, idBot: process.env.BOTID }).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        guild
    })
};
