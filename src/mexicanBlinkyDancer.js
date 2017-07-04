var mexicanBlinkyDancer = function(top, left, timeBewteenSteps) {
  makeDancer.call(this, top, left, timeBewteenSteps);
  this.$node = $('<span><img src="zeus.jpg" class="tester" alt="zeus" width="100"></span>');
  //this.$node = $('<span><img src="zeus.jpg" alt="zeus" width="100"></span>');
  
};

mexicanBlinkyDancer.prototype = Object.create(makeDancer.prototype);
mexicanBlinkyDancer.prototype.constructor = mexicanBlinkyDancer;

mexicanBlinkyDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  
  this.$node.fadeToggle();
  
};
