module.exports = async function checkGuild(req, res, next) {
    if (
        typeof req.body.guild == 'string' &&
        typeof req.body?.DM == 'object' &&
        typeof req.body?.GUILD == 'object' &&
        typeof req.body.DM?.active === 'boolean' &&
        (typeof req.body.DM?.content === 'string' || typeof req.body.DM?.content === "undefined") &&
        typeof req.body.DM?.embeds == "object" &&
        typeof req.body.GUILD?.active === 'boolean' &&
        typeof req.body.GUILD?.channel === 'string' &&
        typeof req.body.GUILD?.colorAmbiance === 'string' &&
        typeof req.body.GUILD?.colorText === 'string' &&
        typeof req.body.GUILD?.background === 'string'
    ) {
        if (/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(req.body.GUILD?.background) &&
            /^#?([a-f\d]{6}|[a-f\d]{3})$/i.test(req.body.GUILD.colorAmbiance) &&
            /^#?([a-f\d]{6}|[a-f\d]{3})$/i.test(req.body.GUILD.colorText)) {
            next()
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(403).json({
                "success": false,
                "erreur": "Le type d'un argument est invalide"
            })
        }
    }
    else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(403).json({
            "success": false,
            "erreur": "Argument manquant ou invalide"
        })
    }
}