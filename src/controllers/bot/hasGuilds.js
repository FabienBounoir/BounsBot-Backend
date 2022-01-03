const serveurJoin = require('../../models/serveurJoin')

module.exports = async function(req, res, next){
    let guilds = req.query.guilds.split(',')
    let guildsExist = await serveurJoin.find({serveurId: {$in: guilds}})
    let hasGuilds = []

    guilds.forEach(guild => {
        if(guildsExist.find(guildExist => guildExist.serveurId === guild)) hasGuilds.push(guild)
    })

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        hasGuilds
    })
};
