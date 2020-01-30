const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card');


describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });

  it.skip('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should be instatiated with a guess and a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.guess).to.equal('function');
    expect(turn.card).to.equal(card);
  });

  it.skip('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.returnGuess()).to.equal('function');
  });

  it.skip('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should evaluate whether the guess is true or false', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should let the player know whether the guess is correct or incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
