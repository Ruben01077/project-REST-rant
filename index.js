require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// in case of /plase send to controllers/places
// app.use('/places', require('./controllers/places'))

app.get('/places', (req, res) => {

  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  },
  {
    name: 'Bakery',
    city: 'Glendale',
    state: 'CA',
    cuisines: 'Resaurant, Bakery',
    pic: 'http://placekitten.com/g/200/300'
  }]


  

  res.render('places/index', {places})
})

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)
