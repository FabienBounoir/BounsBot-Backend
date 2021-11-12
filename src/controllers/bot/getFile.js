const globalLevel = require("../../models/DiscordGlobalLevel")

module.exports = async function(req, res, next){

    // const socket = io("http://localhost:5283", {
    // reconnectionDelayMax: 10000,
    // auth: {
    //     token: "123"
    // },
    // query: {
    //     "my-key": "my-value"
    // }
    // });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        "coucou":"salut"
    })
};
