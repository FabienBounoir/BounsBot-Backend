const express = require("express");
const router = express.Router();

const { getConfigGuild, updateConfigGuild } = require("../controllers/configGuilds")
const checkGuildAccess = require("../middleware/checkGuildAccess")
const checkDataUpdate = require("../middleware/checkDataUpdate")

//Mes route
router.get("/:id", getConfigGuild);
router.put("/:id", checkGuildAccess, checkDataUpdate, updateConfigGuild);

module.exports = router