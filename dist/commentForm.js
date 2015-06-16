var React = require('react');
var blog = require('./blogForm.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit = {this.commentSubmitted}>
					<input ref = "commentText" type = "text" placeholder = "Enter a comment..." />
					<button>Submit</button>
				</form>
			</div>
		)
	},
	commentSubmitted: function(e) {
		e.preventDefault();
		console.log(this.refs.commentText.getDOMNode().value);
	}
})