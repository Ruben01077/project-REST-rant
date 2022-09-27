const router = require("express").Router()
const places = require("../models/places")


router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
  res.render('places/index', {places})
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)){

    res.render("error404")

  } else if(id > places.length){

    res.render("error404")
  } else {

    res.render('places/show', { place: places[id], id })

  }

})




router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
 
  places.push(req.body) // push to the array
  res.redirect('/places') // after you have added a new place with the POST route, we can redirect to the index route to see our newly added place!
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})




  

module.exports = router
