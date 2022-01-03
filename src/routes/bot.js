const express = require("express");
const router = express.Router();

const { hasGuilds } = require("../controllers/bot")

router.get("/hasguilds", hasGuilds);

module.exports = router