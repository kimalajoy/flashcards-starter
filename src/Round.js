const Turn = require('../src/Turn.js');

class Round {
  turnCount = 0;
  guesses = [];
  incorrectGuesses= [];

  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard(){
    return this.deck.cards[0];
  }

  takeTurn(guess, card){
    this.deck.cards.pop();
    this.guesses.push(guess);
    var turn = new Turn(guess, card);

    if(!turn.evaluateGuess()){
      this.incorrectGuesses.push(card.id);
    }

    this.turnCount++;

    return turn.giveFeedback();
  }

  calculatePercentCorrect(){
    return 1 - (this.incorrectGuesses.length / this.guesses.length);
  }
}










module.exports = Round;
