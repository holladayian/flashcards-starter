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
    this.instantiateTurn(guess);
    this.countTurns();
    this.evaluateGuess(guess);
    this.shiftToNextCard();
    return this.returnFeedback();
  }

  instantiateTurn(guess) {
    this.turn = new Turn(guess, this.returnCurrentCard());
  }

  countTurns() {
    this.turns++;
  }

  evaluateGuess(guess) {
    if (guess !== this.returnCurrentCard().correctAnswer) {
      this.incorrectGuesses.push(guess);
    }
  }

  shiftToNextCard() {
    this.deck.shift();
  }

  returnFeedback() {
    return this.turn.giveFeedback();
  }

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length > 0) {
      return (100 * (1 - this.incorrectGuesses.length / this.turns));
    } else {
      return 'a hunnit'
    }
  }

  endRound() {
    console.log(
      `
      ** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!
      `
    );
    return process.exit();
  }
}

module.exports = Round;
