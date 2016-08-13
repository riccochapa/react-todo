var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
var myList = (<ul>
    <li>This is in a list</li>
    <li>This is also in a list</li>
    <li>This is too</li>
  </ul>)

ReactDOM.render(
	myList,
  document.getElementById('app')
);
