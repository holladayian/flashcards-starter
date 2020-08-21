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

  printMessage(deck) {
    console.log(
      `
      Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
      -----------------------------------------------------------------------
      `
    )
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cardList = this.instantiateCard();
    const deck = this.instantiateDeck(cardList);
    this.currentRound = this.instantiateRound(deck)
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  }

  instantiateCard() {
    return prototypeQuestions.map(card =>
      new Card(
        card['id'],
        card['question'],
        card['answers'],
        card['correctAnswer']
      )
    );
  }

  instantiateDeck(cardList) {
    return new Deck(cardList);
  }

  instantiateRound(deck) {
    return new Round(deck);
  }
}

module.exports = Game;
