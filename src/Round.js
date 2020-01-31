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

  takeTurn(userGuess){
    this.guesses.push(userGuess);

    var card = this.returnCurrentCard();
    var turn = new Turn(userGuess, card);

    if (!turn.evaluateGuess()){
      this.incorrectGuesses.push(card.id);
    }
    this.turnCount++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect(){
    return 100*(1 - (this.incorrectGuesses.length / this.guesses.length));
  }

  endRound() {
    var percentCorrect = this.calculatePercentCorrect();
    var roundEndMessage = `‘** Round over! ** You answered ${percentCorrect}% of the questions correctly!`

    console.log(roundEndMessage);
    return roundEndMessage;
  }

}


module.exports = Round;
