describe('someRandomDancer', function() {

  var someRandomDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    someRandomDancer = new randomDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(someRandomDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have nodes that moves around randomly', function() {
    sinon.spy(someRandomDancer.$node, 'animate');
    someRandomDancer.animateDiv();
    expect(someRandomDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(someRandomDancer, 'step');
      expect(someRandomDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(someRandomDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(someRandomDancer.step.callCount).to.be.equal(2);
    });
  });
});
