const React = require('react');
const comment = require('../../models/comment');
const Def = require("../default");

function show(data) {

    let comments = (
        <h3 className='inactive'>
            No Comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        
let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars
}, 0)

let averageRating = sumRating / data.place.comments.length
rating = (
    <h3>{averageRating} stars</h3>
)


        comments = data.place.comments.map(c => {

            return (

                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>

            )

        })

    }


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
                        <img src={`${data.place.pic}`} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>

                    <div className='rightDiv'>
                        <h1>{data.place.name}</h1>
                        <h2 className='disc'>Rating</h2>
                        {rating}
                        <br />
                        <h2 className='disc'>Description</h2>
                        <h3>
                            {data.place.showEstablished()}

                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                           <h2>
                            Comments
                           </h2>
                            {comments}
                            <label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1"></input>
                    </div>

                </div>
              

                <div className='editDeleteDiv'>

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








