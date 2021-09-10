const express = require("express");
const router = express.Router();

const { getgloballevel, getlevel } = require("../controllers/levelDiscord")

//Mes route
router.get("/", getgloballevel);
router.get("/:id", getlevel);

module.exports = router