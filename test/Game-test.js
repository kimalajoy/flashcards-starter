const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {

  it('should keep track of the current round', function() {

    const game = new Game();
    const round = new Round();

    expect(game.currentRound).to.equal('');
  });

  it.skip('should create card', function() {

    const game = new Game();
    const card = new Card();

    expect().to.be.a('');
  });

  it.skip('should put cards in a deck', function() {

    const game = new Game();
    const card = new Card();
    const deck = new Deck();

    expect().to.be.a('');
  });

  it.skip('should create a new round using the cards in a deck', function() {

    const game = new Game();
    const card = new Card();
    const deck = new Deck();

    expect().to.be.a('');
  });

  it.skip('should print the message about the end of the game', function() {

    const game = new Game();
    const round = new Round();

    this.pringMessage()
    expect().to.be.a('');
  });

  it.skip('should print the question', function() {

    const game = new Game();
    const round = new Round();

    this.printQuestion()
    expect().to.be.a('');
  });



  });
