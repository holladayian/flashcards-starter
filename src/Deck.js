const util = require('./util');


class Deck {
  constructor(cardList) {
    this.cardList = cardList;
  }

  countCards() {
    return this.cardList.length;
  }
}

module.exports = Deck;
