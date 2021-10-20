const express = require("express");
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
const DiscordBDD = require("mongoose")
const TwitchBDD = require("mongoose")
const config = require("./config.json")

const discord = require("./routes/discord.js")
const playlist = require("./routes/playlist.js")
const twitch = require("./routes/twitch.js")
const guild = require("./routes/guild.js")

//user et password bdd
var userDB = process.env.USERDB || config.UserDB;
var passwordDB = process.env.PASSWORDDB || config.PasswordDB;

//connexion BDD
DiscordBDD.connect(`mongodb+srv://${userDB}:${passwordDB}@levelbounsbot.1h1zt.mongodb.net/BounsBot?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//route
app.use("/discord", discord)
app.use("/playlist", playlist)
app.use("/twitch", twitch)
app.use("/guild", guild)

app.listen(process.env.PORT || config.port)