const React = require('react')
const Def = require('./default')



function home() {



  return (
    <Def>

      <head>

        <title>Home</title>
      </head>
      <body>

        <h1>HOME</h1>
        <div className="main-Div">
          <img src="images/strawberry.jpg" alt="Photo-by-Artur-Rutkowski-strawberry" className="strawberry_img" />

          <span className="photo-by"> Photo by <a href="https://unsplash.com/photos/GdTLaWamFHw">Artur Rutkowski </a> </span>
        </div>
        <a href="/places" className="aTag">
          <button type="button" className="button">Places</button>
        </a>
        <a href="/places/new" className="aTag">
          <button type="button" className="button">Add new place</button>
        </a>


      </body>
    </Def>
  )
}



module.exports = home
