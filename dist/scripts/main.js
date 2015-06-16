var React = require('react');
var images = require('../images.js');
var commentForm = require('../commentForm.js');
var blogForm = require('../blogForm.js');
var loginForm = require('../loginForm.js');

React.render(
	React.createElement(commentForm, null),
	document.getElementById('container')
);

React.render(
	React.createElement(blogForm, null),
	document.getElementById('formSecB')
);

React.render(
	React.createElement(loginFormForm, null),
	document.getElementById('loginSec')
);