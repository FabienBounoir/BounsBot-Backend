const guildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    const guild = await guildConfig.findOne({ guild: req.params.id, idBot: process.env.BOTID }, { "_id": 0, "guild": -1, "sheesh": -1, "heyreaction": -1, "rename": -1, "musique": -1, "radio": -1, "playlist": -1, "fun": -1, "game": -1, "idChannelTwitchTchat": -1, "chaineTwitch": -1 }).exec()

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(
        guild
    )
};
