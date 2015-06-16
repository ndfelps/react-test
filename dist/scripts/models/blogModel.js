var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		text: '',
		userID: null,
		tags: null
	},
	validate: function(attr) {
		
	}
});