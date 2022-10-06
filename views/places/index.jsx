const React = require("react");
const Def = require("../default")




function index(data) {

  let placesFormatted = data.places.map(function (place) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">   
            <h2> <a href={`/places/${place.id}`}>{place.name}</a> </h2>
           
             <div className="picture-div">
               <a href={`/places/${place.id}`}><img className="place-images" src={place.pic} alt={place.name}/></a> 
             </div>
            <p>Located in {place.city}</p>
          </div>

        </div>
      </div>


    )

  })


  return (
    <Def>
      <head>
      <title>Places</title>
      </head>
      <main>
        <div className="places-div">
          <h1>Places to Rant or Rave About</h1>
        </div>

        <div className="grid-row">{placesFormatted}</div>
        <a href="/places" className="aTag">
                <button type="button" className="button">Places</button>
                </a>
                <a href="/places/new" className="aTag">
                <button type="button" className="button">Add new place</button>
                </a>
                <a href="/" className="aTag">
                <button type="button" className="button">Home</button>
                </a>
      </main>
    </Def>
  )



}




module.exports = index;
