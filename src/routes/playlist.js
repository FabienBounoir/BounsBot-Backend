const express = require("express");
const router = express.Router();

const { getAllPlaylist, getPlaylist, searchPlaylist } = require("../controllers/playlist")

//Mes route
router.get("/", getAllPlaylist);
router.get("/:nom", getPlaylist);
router.get("/search/:nom", searchPlaylist);

module.exports = router