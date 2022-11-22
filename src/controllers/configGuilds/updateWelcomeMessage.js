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

    config.welcomeMessage = req.body.welcomeMessage
    config.welcomeActive = req.body.welcomeActive


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


