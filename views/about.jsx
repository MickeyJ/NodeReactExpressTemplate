var React = require('react');
var DefaultLayout = require('./master');

var indexComponent = React.createClass({
  render: function(){
    return(
      <DefaultLayout
        title={this.props.title}
        name={this.props.name}
        content={this.props.content}>

        <section className="col1-3 box aid">
          <p>1/3</p>
        </section>

        <section className="col1-3 box aid">
          <p>1/3</p>
        </section>

        <section className="col1-3 box aid">
          <p>1/3</p>
        </section>

        <section className="col1-4 box aid">
          <p>1/4</p>
        </section>

        <section className="col1-4 box aid">
          <p>1/4</p>
        </section>

        <section className="col1-4 box aid">
          <p>1/4</p>
        </section>

        <section className="col1-4 box aid">
          <p>1/4</p>
        </section>

      </DefaultLayout>
    )
  }
});
module.exports = indexComponent;