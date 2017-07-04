var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span><img src="zeus.jpg" alt="zeus" width="100"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  //this.oldStep = this.step;

};
  
  
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {
  //this.oldStep();
  this.oldStep = makeDancer.prototype.step;
  this.oldStep.call(this);
  
  this.$node.toggle();  
};
//new BlinkyDancer(111, 111, 1234);