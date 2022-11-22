const guildConfig = require("../../models/guildConfig")

module.exports = async function (req, res, next) {
    let defaultConfig = {
        configurationFeatures: [
            {
                "name": "Global",
                "elements": [
                    {
                        "name": "Tableau de bord",
                        "url": "dashboard"
                    },
                    {
                        "name": "Logs",
                        "url": "logs"
                    }
                ]
            },
            {
                "name": "Gestion du serveur",
                "elements": [
                    {
                        "name": "Bienvenue",
                        "url": "welcome"
                    }
                ]
            },
            // {
            //     "name": "Utilitaires",
            //     "elements": [
            //         {
            //             "name": "Envoyer un message",
            //             "url": "guild_message"
            //         }
            //     ]
            // }
        ]
    }

    const configurationFeatures = await guildConfig.findOne({ guild: req.params.id, idBot: process.env.BOTID }, { configurationFeatures: -1 }).exec()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(configurationFeatures || defaultConfig)
};