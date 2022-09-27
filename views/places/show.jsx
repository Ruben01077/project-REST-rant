const React = require('react');
const Def = require("../default");

function show(data) {


    return (

        <Def>

            <head>
                <title>Show</title>

                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/show.css" />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>

            </head>


            <body>

                <div className='mainDiv'>
                    <div className='leftDiv'>
                        <img src={`${data.place.pic}`} alt="" />
                    </div>
                    <div className='rightDiv'>
                        <h1>{data.place.name}</h1>
                        <h5>City: {data.place.city}, {data.place.state}</h5>
                        <h5>Cuisines: {data.place.cuisines}</h5>
                    </div>

                </div>
                <div className='commentDiv'>

                    <input type="comment" className='commentInput' placeholder='Comments' />

                </div>

                <div>

                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>



                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>


                </div>

            </body>


        </Def>

    )

}


module.exports = show





