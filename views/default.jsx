const React = require('react')



function Def(html) {

    return (
        <html>
            <head>

                <link rel="stylesheet" href="css/style.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>

            </head>
            <body>
                {/* <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Places</a></li>
                    </ul>
                </nav> */}

                <nav  class="navbar navbar-dark bg-primary">
                <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Places</a></li>
                    </ul>
                </nav>

             


                {html.children}


            </body>
        </html>
    )
}





module.exports = Def
