const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a guess', function() {
    const turn = new Turn('Tuna Fish');
    expect(turn.guess).to.equal('Tuna Fish');
  });

  it('should take in a Card to guess from', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Tuna Fish', card);
    expect(turn.flashCard).to.equal(card);
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Tuna Fish', card);
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Tuna Fish', card);
    expect(turn.returnCard()).to.equal(turn.flashCard);
  });

  it('should evaluate a users answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('Tuna Fish', card);
    const turn2 = new Turn('object', card);
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should evaluate a give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('Tuna Fish', card);
    const turn2 = new Turn('object', card);
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });


})
