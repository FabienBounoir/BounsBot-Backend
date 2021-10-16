const express = require("express");
const router = express.Router();

const { getConfigGuild } = require("../controllers/configGuilds")

//Mes route
router.get("/:id", getConfigGuild);

module.exports = router