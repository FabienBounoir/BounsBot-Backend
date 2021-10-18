var axios = require('axios');

module.exports = async function checkGuild(req, res, next) {
    console.log('Inside middleware 2');

    console.log(req.body)
    if(typeof req.body.logChannel !== 'undefined' && typeof req.body.sheesh !== 'undefined' && typeof req.body.heyreaction !== 'undefined' && typeof req.body.rename !== 'undefined' && typeof req.body.musique !== 'undefined' && typeof req.body.radio !== 'undefined' && typeof req.body.playlist !== 'undefined' && typeof req.body.fun !== 'undefined')
    {
        next()
    }
    else
    {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(403).json({
            "erreur":"argument manquant"
        })
    }
}