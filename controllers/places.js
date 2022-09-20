const router = require("express").Router;

router.get("/", function(req, res){

res.send("Get /places")


})

module.exports = router;
