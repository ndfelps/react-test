var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit = {this.blogSubmitted}>
				<input id = 'poster' ref = "poster" type = "text" placeholder = 'Username'/><br/>
				<input id = 'blog' ref = "blog" type = "text" placeholder = "And how does that make you feel?" />
				<button>Submit</button>
			</form>
		)
	},
	commentSubmitted: function(e) {
		e.preventDefault();
		console.log(this.refs.poster.getDOMNode().value);
		console.log(this.refs.blog.getDOMNode().value);
	}
})