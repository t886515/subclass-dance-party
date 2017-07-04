var expandDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="expand"></span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  //this.oldStep = this.step;
  this.bool = true;
  this.size = 25;
  this.num = 0;
  this.numbool = true;
};
  
  
expandDancer.prototype = Object.create(makeDancer.prototype);
expandDancer.prototype.constructor = expandDancer;


expandDancer.prototype.step = function() {
  this.oldStep = makeDancer.prototype.step;
  this.oldStep.call(this);
  if (this.bool) {
  	this.size ++;
  	if (this.size >= 100) {
  		this.bool = false;
  	} 
  } else {
  	this.size --;
  	if (this.size <= 0) {
  		this.bool = true;
  	}
  }

  //this.$node.toggle();
  this.$node.css('border', this.size+'px solid blue')
  this.$node.css('border-radius', this.size+'px')
  this.changeColor();
};


expandDancer.prototype.changeColor = function() {
  if (this.numbool) {
  	this.num+=10;
  	if (this.num >=255) {
  		this.numbool = false;
  	}
  } else {
  	this.num-=10;
  	if (this.num <=50) {
  		this.numbool = true;
  	}
  }
  var string = 'rgb('+ this.num +', 40,'+this.num+')'
  this.$node.css('border-color', string);
  
};
//new BlinkyDancer(111, 111, 1234);