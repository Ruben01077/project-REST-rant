const React = require("react");
const Def = require("../default")




function index(data) {

  let placesFormatted = data.places.map(function (place) {
    return (




      <div class="container">
        <div class="row">
          <div class="col">   <h2>{place.name}</h2>
            <p> {place.cuisines}</p>
            <img className="place-images" src={place.pic} alt={place.name} />
            <p>Located in {place.city}</p>
          </div>

        </div>
      </div>


    )

  })


  return (
    <Def>
      <head>
        <link rel="stylesheet" href="public/css/style.css" />
      </head>
      <main>
        <div className="places-div">
          <h1>Places to Rant or Rave About</h1>
        </div>

        <div className="grid-row">{placesFormatted}</div>
      </main>
    </Def>
  )



}




module.exports = index;
