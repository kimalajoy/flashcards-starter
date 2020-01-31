const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    this.deck = new Deck(this.createCards());
    this.round = new Round(this.deck);

    this.printMessage();
    this.printQuestion();

    this.currentRound = this.round.turnCount;
  }

  createCards(){
    var cards = [];
    for(var i = 0; i < prototypeQuestions.length; i++) {
      cards.push(new Card(prototypeQuestions[i]));
    }

    return cards;
  }

  printMessage() {
      console.log(`Welcome to FlashCards! You are playing with ${this.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion() {
      util.main(this.round);
  }
}

module.exports = Game;
