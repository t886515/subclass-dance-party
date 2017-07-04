var randomDancer = function(top, left, timeBewteenSteps) {
  makeDancer.call(this, top, left, timeBewteenSteps);
  this.$node = $('<span class="test"></span>');
  this.animateDiv();
  //this.changeColor();
};

randomDancer.prototype = Object.create(makeDancer.prototype);
randomDancer.prototype.constructor = randomDancer;

randomDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  
  //this.$node.fadeToggle();
  
  this.$node.css('border-color', this.pickColor());
};

randomDancer.prototype.makeNewPosition = function() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
    
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
    
  return [nh, nw];    
};

randomDancer.prototype.animateDiv = function() {
  var newq = this.makeNewPosition();
  var context = this;
  this.$node.animate({ top: newq[0], left: newq[1] }, function() {
    context.animateDiv();
  });
};

randomDancer.prototype.pickColor = function() {
  var color = ['#F9EBEA', '#F2D7D5', '#E6B0AA', '#D98880', '#CD6155', '#C0392B', '#C39BD3', '#AF7AC5'];
  var randomColor = color[Math.floor(Math.random() * color.length)];
  return randomColor;
};

// randomDancer.prototype.changeShape = function() {
//   var randomNumber = 
// }

