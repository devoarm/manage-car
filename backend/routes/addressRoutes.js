var express = require("express");
var router = express.Router();
const agencyController = require("../controller/addressController");
const auth = require("../middleware/auth")
/* GET home page. */
router.get("/chw",auth,agencyController.GetChw);
router.get("/amp/:id",auth,agencyController.GetAmp);
router.get("/tmb/:id",auth,agencyController.GetTmb);

module.exports = router;
