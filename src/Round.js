const Turn = require('./Turn');


class Round {
  constructor(deck) {
    this.deck = deck.cardList;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.turn;
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.returnCurrentCard());
    // change this.turn to be a parameter
    if (guess !== this.returnCurrentCard().correctAnswer) {
      this.incorrectGuesses.push(guess);
    }
    this.turns++;
    // consider breaking this functionality into Deck.js
    // the Law of Demeter
    this.deck.push(this.deck.shift());
    return this.turn.giveFeedback();
    // maybe turn this.takeTurn into a handler function
    // consider the readability
  }

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length > 0) {
      return (100 * (1 - this.incorrectGuesses.length / this.turns));
    } else {
      return 'a hunnit'
    }
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    // fix this in the testing suite
  }
}

module.exports = Round;
