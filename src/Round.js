const util = require('./util');
const Turn = require('./Turn');


class Round {
  constructor(deck) {
    this.deck = deck.cardList;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.guess;

  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    if (guess !== this.returnCurrentCard().correctAnswer) {
      this.incorrectGuesses.push(guess);
    }
    this.guess = new Turn(guess, this.returnCurrentCard());
    // change this.guess to be a parameter
    this.turns++;
    this.deck.push(this.deck.shift());
    return this.guess.giveFeedback();
  }

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length > 0) {
      return (1 - this.incorrectGuesses.length / this.turns);
    } else {
      return 'a hunnit'
    }
  }

  endRound() {
    return `** Round over! ** You answered ${100 * this.calculatePercentCorrect()}% of the questions correctly!`;
    // this needs to console.log
    // prolly change cacl%Correct
  }
}

module.exports = Round;
