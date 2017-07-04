var randomTest = function(top, left, timeBewteenSteps) {
  makeDancer.call(this, top, left, timeBewteenSteps);
  //this.$node = $('<span class="tester"></span>');
  this.animateDiv();
  this.changeColor();
};

randomTest.prototype = Object.create(makeDancer.prototype);
randomTest.prototype.constructor = randomTest;

randomTest.prototype.step = function() { 
  makeDancer.prototype.step.call(this);
  
  this.$node.fadeToggle();
  
};

randomTest.prototype.makeNewPosition = function() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
    
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
    
  return [nh, nw];    
};

randomTest.prototype.animateDiv = function() {
  var newq = this.makeNewPosition();
  var context = this;
  this.$node.animate({ top: newq[0], left: newq[1] }, function() {
    context.animateDiv();
  });
  // this.$node.fadeToggle();
};

randomTest.prototype.pickColor = function() {
  var color = ['#ff0000', '#00ff00', '#dc143c', '#228b22', '#2f4f4f', '9400d3'];
  var randomColor = color[Math.floor(Math.random() * color.length)];
  //console.log(randomColor);
  return randomColor;
};

randomTest.prototype.changeColor = function() {
  this.$node.css('border-color', this.pickColor());
};