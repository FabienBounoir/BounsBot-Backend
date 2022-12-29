const express = require("express");
const router = express.Router();

const { getConfigGuild, getDashboard, getConfigFeatures, updateConfigGuild, updateWelcomeMessage, getWelcomeMessage, getLogs } = require("../controllers/configGuilds")
const checkGuildAccess = require("../middleware/checkGuildAccess")
const checkDataUpdate = require("../middleware/checkDataUpdate")
const checkDashboardElement = require("../middleware/checkDashboardElement")
const checkWelcomeElement = require("../middleware/checkWelcomeElement")

//Mes route
router.get("/:id", getConfigGuild);
router.get("/:id/commandtype", getDashboard);
router.get("/:id/welcome", getWelcomeMessage);
router.get("/:id/logs", getLogs);

router.put("/:id/commandtype", checkGuildAccess, checkDashboardElement, updateConfigGuild);
router.put("/:id/welcome", checkGuildAccess, checkWelcomeElement, updateWelcomeMessage);
router.put("/:id/logs", checkGuildAccess, updateConfigGuild);

router.get("/:id/features", getConfigFeatures);

module.exports = router