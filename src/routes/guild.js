const express = require("express");
const router = express.Router();

const { getConfigGuild, updateConfigGuild, getWelcomeMessage, updateWelcomeMessage } = require("../controllers/configGuilds")
const checkGuildAccess = require("../middleware/checkGuildAccess")
const checkDataUpdate = require("../middleware/checkDataUpdate")

//Mes route
router.get("/:id", getConfigGuild);
router.get("/:id/welcomeMessage", getWelcomeMessage);
router.put("/:id", checkGuildAccess, checkDataUpdate, updateConfigGuild);
router.put("/:id/welcomeMessage", checkGuildAccess, updateWelcomeMessage);

module.exports = router