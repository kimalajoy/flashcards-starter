const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards(){
    return this.cards.length;
  }
}


module.exports = Deck;
