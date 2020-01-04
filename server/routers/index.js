const router = require("express").Router();
const routerContact = require("./contact");

router.use("/", routerContact);

module.exports = router;