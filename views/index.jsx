var React = require('react');
var DefaultLayout = require('./master');

var indexComponent = React.createClass({
  render: function(){
   return(
     <DefaultLayout
     title={this.props.title}
     name={this.props.name}
     content={this.props.content}>

       <section className="col1-6 box aid">
         <p>This is Section One</p>
       </section>

       <section className="col5-6 box aid">
         <p>This is Section Two</p>
       </section>

     </DefaultLayout>
   )
  }
});
module.exports = indexComponent;