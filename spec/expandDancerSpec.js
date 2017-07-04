describe('ExpandDancer', function() {

  var ExpandDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ExpandDancer = new expandDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ExpandDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change size', function() {
    sinon.spy(ExpandDancer.$node, 'toggle');
    var prevSize = ExpandDancer.size;
    ExpandDancer.step();
    var afterSize = ExpandDancer.size;
    expect(prevSize!==afterSize).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(ExpandDancer, 'step');
      expect(ExpandDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(ExpandDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ExpandDancer.step.callCount).to.be.equal(2);
    });
  });
});
