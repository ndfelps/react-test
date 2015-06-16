var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit = {this.commentSubmitted}>
				<input ref = "userLog" type = "text" placeholder = "Username" />
				<input ref = "passLog" type = "password" placeholder = "Password" />
				<button>Submit</button>
			</form>
		)
	},
	commentSubmitted: function(e) {
		e.preventDefault();
		console.log(this.refs.userLog.getDOMNode().value);
		console.log(this.refs.passLog.getDOMNode().value);
	}
})