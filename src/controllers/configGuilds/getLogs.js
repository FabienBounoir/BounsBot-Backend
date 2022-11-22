const guildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    const guild = await guildConfig.findOne({ guild: req.params.id, idBot: process.env.BOTID }, { "_id": 0, "guild": -1, "logs": -1 }).exec()

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(
        guild
    )
};
