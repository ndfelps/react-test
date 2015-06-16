var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');


module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<img src = 'http://images.medicaldaily.com/sites/medicaldaily.com/files/2013/08/04/0/62/6259.jpg'></img>
				<comments></comments>
			</section>
		)
	}
})