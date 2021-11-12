var axios = require('axios');

module.exports = async function checkGuild(req, res, next) {
    console.log('Inside middleware 1');

    console.log(req)

    return
    var config = {
        method: 'get',
        url: 'https://discord.com/api/users/@me/guilds',
        headers: { 
            'Authorization': 'Bearer ' + req.body.accesstoken,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const body = await axios(config).catch(error => console.log(error))

    console.log(body.status)

    if(body?.status === 200)
    {
        const result = body.data;

        let guildAdmin = await result.filter(guilds => guilds.permissions === 2147483647 && guilds.id == req.body.guildId)

        console.log(guildAdmin.length)
        
        if(guildAdmin.length != 0)
        {
            next();
        }
        else
        {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(403).json({
                "erreur":"Vous n'avez pas les permissions requise pour effectué cette modification"
            })
        }
    }
    else
    {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(401).json({
            "erreur":"Token invalide"
        })
    }

}