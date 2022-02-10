const guildConfig = require("../../models/guildConfig")
var axios = require('axios');

module.exports = async function(req, res, next){
    let config = {}
    try
    {
        config = await guildConfig.find({ "guild" : req.params.id, idBot: "806105506883960853" }).exec()
    }
    catch(error)
    {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        res.status(500).json({
            "erreur": error
        })
        return
    }
    
    config[0].welcomeMessage = req.body.welcomeMessage
    config[0].welcomeActive = req.body.welcomeActive

    config[0].save((err) => {   
        if (err)
        {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'PUT');
            res.status(500).json({
                "erreur": err
            })
        }
        else
        {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json({
                "success": "ok"
            })
        }
    });
};


