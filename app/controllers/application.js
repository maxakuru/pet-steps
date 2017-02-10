import Ember from 'ember';

export default Ember.Controller.extend({
	isDwarf: false,
	petLegFactor: 0.5,
	humanLegFactor: 0.415,
	inchToCm: 2.54,
	dwarfFactor: 0.6,
	actions: {
		calculate: function(){
			//estimate human's stride length
			var humanStrideLength = this.humanHeight*this.get('humanLegFactor');
			
			//estimate pet's stride length
			var petStrideLength = this.get('isDwarf') ? 
			this.petHeight*this.get('petLegFactor')*this.get('dwarfFactor') : 
			this.petHeight*this.get('petLegFactor');

			//get ratio of human stride length to pet stride length
			var stepRatio = humanStrideLength/petStrideLength;

			//multiply ratio by distance
			this.set('results', stepRatio*this.distance);
		}
	}
});