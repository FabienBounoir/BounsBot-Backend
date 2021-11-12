const express = require("express");
const router = express.Router();

const { getFile } = require("../controllers/bot")

router.get("/getfile", getFile);

module.exports = router