const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn1, turn2;
  beforeEach( () => {
    card = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    turn1 = new Turn('Tuna Fish', card);
    turn2 = new Turn('object', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should take in a guess', () => {
    expect(turn1.guess).to.equal('Tuna Fish');
  });

  it('should take in a Card to guess from', () => {
    expect(turn1.flashCard).to.equal(card);
  });

  it('should return a guess', () => {
    expect(turn1.returnGuess()).to.equal(turn1.guess);
  });

  it('should return a card', () => {
    expect(turn1.returnCard()).to.equal(turn1.flashCard);
  });

  it('should evaluate a users answer', () => {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should evaluate a give feedback', () => {
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });


})
