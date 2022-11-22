module.exports = async function checkGuild(req, res, next) {

    //get keys from body
    const keys = Object.keys(req.body);

    console.log(req.body);
    console.log(typeof req.body.guild !== 'undefined')
    console.log(typeof req.body.welcomeActive === 'boolean', typeof req.body.welcomeActive)
    console.log(typeof req.body.welcomeMessage === 'string', typeof req.body.welcomeMessage)
    console.log(typeof req.body.guild !== 'undefined' &&
        typeof req.body.welcomeActive === 'boolean' &&
        typeof req.body.welcomeMessage === 'string')


    if (keys.length == 3 &&
        typeof req.body.guild !== 'undefined' &&
        typeof req.body.welcomeActive === 'boolean' &&
        typeof req.body.welcomeMessage === 'string') {
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