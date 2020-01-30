const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    console.log('card', this.card);
    return this.guess === this.card.correctAnswer;
  }

  giveFeedback() {
    if(this.guess === this.card.correctAnswer) {
      return 'correct!';
    }

    return 'incorrect!';
  }
}








module.exports = Turn;
