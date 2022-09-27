const React = require("react");
const Def = require("./default")


function error404() {
  return (
    <Def>
      <head>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <main>

        <div className="div-404">


          <h1>404: PAGE NOT FOUND</h1>
          <p>Oops, sorry, we can't find this page!</p>
          <img src="/images/dog.jpg" alt="" className="dog-pic-404" />
        </div>

      </main>
    </Def>
  )
}


module.exports = error404;
