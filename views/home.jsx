const React = require('react')
const Def = require('./default')


function home () {


        return (
          <Def>
           
                <head>
                  <link rel="stylesheet" href="/public/css/style.css" />
                </head>
                <body>
              
                  <h1>HOME</h1>
                  <div className="main-Div">
                    <img src="images/strawberry.jpg" alt="Photo-by-Artur-Rutkowski-strawberry" className="strawberry_img" />
                   <span className="photo-by"> Photo by <a href="https://unsplash.com/photos/GdTLaWamFHw">Artur Rutkowski </a> </span>
                  </div>
                 
              
                </body>
          </Def>
        )
      }
      


module.exports = home
