const router = require("express").Router()

router.get("/", function(req, res){

res.send("Places Index Page")


})

router.post("/", function(req, res){

    res.send("Creat New Places")
    
    
    })
module.exports = router
