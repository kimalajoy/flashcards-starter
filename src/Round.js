const Turn = require('../src/Turn.js');

class Round {
  turnCount = 0;
  guesses = [];
  incorrectGuesses= [];

  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  takeTurn(guess, card){
    this.guesses.push(guess);

    var turn = new Turn(guess, card);

    if (!turn.evaluateGuess()){
      this.incorrectGuesses.push(card.id);
    }
    this.turnCount++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect(){
    return 1 - (this.incorrectGuesses.length / this.guesses.length);
  }

  endRound() {
    var end = (`${(turn.giveFeedback)} + ${(this.calculatePercentCorrect)}`)
    return end
  }

}


module.exports = Round;
