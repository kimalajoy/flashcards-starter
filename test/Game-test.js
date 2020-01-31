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

    expect(game.currentRound).to.equal(0);
  });

  it('should create cards', function() {
    const game = new Game();

    expect(game.createCards()).to.be.a('array');
    expect(game.createCards().length).to.equal(30);
    expect(typeof game.createCards()[0]).to.equal('object');
  });


  });
