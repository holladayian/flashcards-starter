const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor() {
    this.currentRound = null;
  }

// consider removing deck from the parameters, because we can access it through round
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cardList = prototypeQuestions.map(card => new Card(card['id'], card['question'], card['answers'], card['correctAnswer'] ));
    // consider breaking this into smaller functions
    const deck = new Deck(cardList);
    console.log(deck);
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
