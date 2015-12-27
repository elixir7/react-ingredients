var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To Do" headingColor="#FF6A6A"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Wish List" />, document.getElementById('wishlist'));
