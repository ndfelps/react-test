var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		name: null
	},
	validate: function(attr) {
		
	}
});