const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;
  beforeEach( () => {
    card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should have a current card', () => {
    expect(round.deck[0]).to.equal(card1);
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });

  it('should instantiate a new turn when a new guess is made', () => {
    round.instantiateTurn('Water Malone');

    expect(round.turn).to.be.an.instanceof(Turn);
  });

  it('should be able to count turns', () => {
    round.countTurns();

    expect(round.turns).to.equal(1);
  });

  it('should be able to remove the current card', () => {
    round.shiftToNextCard();

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should evaluate the guess', () => {
    round.evaluateGuess('A Pirate!');

    expect(round.incorrectGuesses).to.deep.equal(['A Pirate!']);
  });

  it('should be able to return feedback', () => {
    round.takeTurn('A Pirate!');

    expect(round.returnFeedback()).to.equal('incorrect!');
  });

  it('should be able to calculate percent correct', () => {
    round.takeTurn('A Pirate!');
    round.takeTurn('gallbladder');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

});
