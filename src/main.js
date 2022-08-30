const express = require("express");
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
const DiscordBDD = require("mongoose")
const TwitchBDD = require("mongoose")
require('dotenv').config()

const discord = require("./routes/discord.js")
const playlist = require("./routes/playlist.js")
const twitch = require("./routes/twitch.js")
const guild = require("./routes/guild.js")
const bot = require("./routes/bot.js")

//connexion BDD
DiscordBDD.connect(process.env.DB_LINK, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
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
app.use("/bot", bot)

app.listen(process.env.PORT, () => console.log("🚀 Server started on port " + process.env.PORT))