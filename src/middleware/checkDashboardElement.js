module.exports = async function checkGuild(req, res, next) {

    //get keys from body
    const keys = Object.keys(req.body);

    if (keys.length == 11 &&
        typeof req.body.guild !== 'undefined' &&
        typeof req.body.idChannelTwitchTchat !== 'undefined' &&
        typeof req.body.chaineTwitch !== 'undefined' &&
        typeof req.body.game !== 'undefined' &&
        typeof req.body.sheesh !== 'undefined' &&
        typeof req.body.heyreaction !== 'undefined' &&
        typeof req.body.rename !== 'undefined' &&
        typeof req.body.musique !== 'undefined' &&
        typeof req.body.radio !== 'undefined' &&
        typeof req.body.playlist !== 'undefined' &&
        typeof req.body.fun !== 'undefined') {

        next()
    }
    else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(403).json({
            "success": false,
            "erreur": "Argument manquant ou invalide"
        })
    }
}