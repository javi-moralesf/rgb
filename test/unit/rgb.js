import rgb from '../../src/rgb';

describe('rgb', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(rgb, 'greet');
      rgb.greet();
    });

    it('should have been run once', () => {
      expect(rgb.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(rgb.greet).to.have.always.returned('hello');
    });
  });
});
