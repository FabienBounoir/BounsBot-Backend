const guildConfig = require("../../models/guildConfig")
var axios = require('axios');

module.exports = async function(req, res, next){
    // console.log(req.body)
    // console.log(req.body.accesstoken)

    console.log("arrivé a la fin")
    guildConfig.find({ "guild" : req.body.guildId }).exec((erreur, configGuild) => {
        if (erreur) 
        {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(500).json({
                "erreur": erreur
            })
            return
        }

        console.log(configGuild)

        if(configGuild.length == 0)
        {
            const config = new guildConfig({
                guild: req.body.guildId,
                sheesh: req.body.sheesh,
                heyreaction: req.body.heyreaction,
                rename: req.body.rename,
                musique: req.body.musique,
                radio: req.body.radio,
                playlist: req.body.playlist,
                fun: req.body.fun,
            });

            config.save((err) => {
                if (err) return console.error(err);
            });
        }
        else
        {
            var myquery = { guild: req.body.guildId };
            var newvalues = { sheesh: req.body.sheesh, heyreaction: req.body.heyreaction, rename: req.body.rename, musique: req.body.musique, radio: req.body.radio, playlist: req.body.playlist, fun: req.body.fun };

            guildConfig.updateOne(myquery, newvalues, function(err, response) {
                if (err) 
                {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(500).json({
                        "erreur": err
                    })
                    return
                }

                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(200).json({
                    "success":"mise à jour effectué"
                })
            });
        }

    })
};


