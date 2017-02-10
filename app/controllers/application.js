import Ember from 'ember';

export default Ember.Controller.extend({
	results: 0,
	actions: {
		calculate: function(){
			console.log('in calculate: ', this.height)
		}
	}
});