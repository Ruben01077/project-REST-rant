require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require("method-override") // for override

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) // for style
app.use(express.urlencoded({ extended: true })) // This tool is now included standard with Express, but used to be a separate npm module. You can include it by adding the code snippet below with your other app.use() statements.
app.use(methodOverride("_method"))




// in case of /plase send to controllers/places
// app.use('/places', require('./controllers/places'))


app.use('/places', require("./controllers/places"))



app.get('/', (req, res) => {
  res.render('home')
})


app.get('*', (req, res) => {
  res.render('error404')
})






app.listen(process.env.PORT)
