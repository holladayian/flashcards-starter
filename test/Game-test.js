const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should not start with a current round', () => {
    const game = new Game();
    expect(game.currentRound).to.equal(null)
  });

  it('should start a new game', () => {
    const game = new Game();
    game.start();
  });

});
