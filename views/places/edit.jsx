const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
  return (
    <Def>
      <main>
        <head>
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>

        </head>

        <body>

          <h1>Edit Place</h1>

          <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className="row">
            <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" required />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" required />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input className="form-control" id="cuisines" name="cuisines" required />
          </div>
            </div>

            <input className="btn btn-primary" type="submit" value="Add Place" />
          </form>



        </body>
      </main>
    </Def>
  )
}

module.exports = edit_form
