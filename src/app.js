/** @jsx React.DOM */

var React = require('react');

var page = require('page');

var Content = React.createClass({
  render: function() {
    return (
      <div className="row-fluid">
        <div className="span12">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn" href="#">View details »</a></p>
        </div>
      </div>
    );
  }
});

var Sidebar = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-list">
        <li className="nav-header">Sidebar</li>
        <li className="active"><a href="#">Link1</a></li>
        <li><a href="/about">Link2</a></li>
        <li><a href="#">Link3</a></li>
        <li><a href="#">Link4</a></li>
      </ul>
    );
  }
});


React.renderComponent(
  <Content />,
  document.getElementById('content')
);

React.renderComponent(
  <Sidebar />,
  document.getElementById('sidebar')
);
