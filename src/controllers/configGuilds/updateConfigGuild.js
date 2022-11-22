const guildConfig = require("../../models/guildConfig")
var axios = require('axios');

module.exports = async function (req, res, next) {
    let guildInfo = {}
    try {
        guildInfo = await guildConfig.findOne({ guild: req.body.guild, idBot: process.env.BOTID }).exec()

        if (guildInfo) {
            console.log("Guild Info", guildInfo)

            for (let key in req.body) {
                guildInfo[key] = req.body[key]
            }
        }
        else {
            guildInfo = new guildConfig(req.body);
        }

        guildInfo.save((err) => {
            if (err) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                return res.status(500).json({
                    "success": false,
                    "message": err
                })
            }
        });
    } catch (error) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        return res.status(500).json({
            "success": false,
            "message": error
        })
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        "success": true,
        "message": "Guild config updated",
    })
};
