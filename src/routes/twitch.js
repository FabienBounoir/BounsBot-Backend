const express = require("express");
const router = express.Router();

const { getlevel } = require("../controllers/levelTwitch")

//Mes route
router.get("/:id", getlevel);

module.exports = router