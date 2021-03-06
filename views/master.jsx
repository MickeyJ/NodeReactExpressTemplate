var React = require('react');

var MasterLayout = React.createClass({

  siteName: "Site Name",

  render: function(){
    return(
      <html lang="en">
      <head>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.content}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="./public/css/main.css"/>
      </head>
      <body>
        <div className="all-wrap aid">

          <div className="top-wrap">
            <header>
              <h1>{this.siteName}</h1>
            </header>

            <nav>
              <ul>
                <li><a href="/" >Home</a></li>
                <li><a href="/about" >About</a></li>
              </ul>
            </nav>
          </div>
          <main className="main-wrap flex-row">

            {this.props.children}

          </main>

          <footer className="footer-wrap">
            <ul>
              <li>&copy; 2015</li>
              <li>{this.siteName}</li>
            </ul>
          </footer>

        </div>
      </body>
      </html>
    )
  }
});
module.exports = MasterLayout;