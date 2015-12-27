var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  //Sets the initial configutaion for the List.
  //returns an empty items array and an empty newItemText
  getInitialState: function(){
    return {
      items: [],
      newItemText: ''
    };
  },
  onChange: function(e){
    //Update the state property every time a keystroke is typed
    this.setState({
      newItemText: e.target.value
    });
  },
  handleSubmit: function(e){
    //Stop the button from getting clicks since we are using form onSubmit
    e.preventDefault();

    //Add the new item to the list
    var currentItems = this.state.items;

    //Update the main item list with the new list and clear newItemText
    currentItems.push(this.state.newItemText);

    this.setState({
      items: currentItems,
      newItemText: ''
    });
  },
  render: function(){
    //onChange is called with every keysyroke so we can store the most recent data entered
    //value is what the user sees in the inut box - we point this to the newItemText so it updates on every item

    var divStyle = {
      marginTop: 20
    };

    var headingStyle = {};

    var borderStyle = {};

    //If the headingColor exists (is send from the main.jsx as an input ) change the headingStyle (in css that would be "background") to the passed in headingColor
    if(this.props.headingColor){
      headingStyle.background = this.props.headingColor;
      borderStyle.borderColor = this.props.headingColor;
    };

    return(
      <div style={divStyle} className="col-sm-4">
        <div style={borderStyle} className="panel panel-primary">
          <div style={$.extend({}, headingStyle, borderStyle)} className="panel panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-9">
                <input className="form-control" onChange={this.onChange} value={this.props.newItemText} />
              </div>
              <div className="col-sm-3">
                <button style={$.extend({}, headingStyle, borderStyle)} className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        <List items={this.state.items} />
        </div>
      </div>
    );
  }
});

module.exports = ListManager;
