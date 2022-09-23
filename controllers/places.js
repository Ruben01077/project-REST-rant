const router = require("express").Router()

router.get("/", function(req, res){

res.send("Places Index Page")


})


module.exports = router
