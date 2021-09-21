const express = require("express");
const router = express.Router();

const { getAllPlaylist, getPlaylist } = require("../controllers/playlist")

//Mes route
router.get("/", getAllPlaylist);
router.get("/:nom", getPlaylist);

module.exports = router