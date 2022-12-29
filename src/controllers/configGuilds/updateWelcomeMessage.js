const guildConfig = require("../../models/guildConfig")
var axios = require('axios');

module.exports = async function (req, res, next) {
    let config = {}
    try {
        config = await guildConfig.findOne({ "guild": req.params.id, idBot: process.env.BOTID }).exec()
    }
    catch (error) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        res.status(500).json({
            "erreur": error
        })
        return
    }

    console.log("welcome", config.welcome)

    if (config.welcome) {
        config.welcome.DM = req.body.DM
        config.welcome.guild = req.body.GUILD
    }
    else {
        config.welcome = {
            DM: req.body.DM,
            guild: req.body.GUILD
        }
    }

    console.log("welcome", config.welcome)

    config.save((err) => {
        if (err) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'PUT');
            res.status(500).json({
                "erreur": err
            })
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json({
                "success": "ok"
            })
        }
    });
};


