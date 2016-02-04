var React = require('react');
var DefaultLayout = require('./master');

var indexComponent = React.createClass({
  render: function(){
   return(
     <DefaultLayout
     title={this.props.title}
     name={this.props.name}
     content={this.props.content}>

       <section>
         <p>This is Section One</p>
       </section>

     </DefaultLayout>
   )
  }
});
module.exports = indexComponent;