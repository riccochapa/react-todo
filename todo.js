var React = require('react');
var ReactDOM = require('react-dom');


var myToDoList = (<ul>
    <li>This is in a list</li>
    <li>This is also in a list</li>
    <li>This is too</li>
  </ul>)

ReactDOM.render(
	myToDoList,
  document.getElementById('app')
);
