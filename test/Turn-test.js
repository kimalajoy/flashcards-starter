const chai = require('chai');
const expect = chai.expect;

const Turn = require('../Turn.js');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instatiated with a guess and a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.guess).to.equal('function');
    expect(turn.card).to.equal(card);
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.returnGuess()).to.equal('function');
  });

  it('should return a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate whether the guess is true or false', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should let the player know whether the guess is correct or incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });




  // it('It should store the guessed answer', function() {
  //   const turn = new Turn();
  //   expect(turn.guessedAnswer).to.equal('');
  // });
  //
  // it('should store a card object for the current card in play', function() {
  //   const turn = new Turn();
  //   expect(turn.card).to.equal({});
  // });
  //
  // it.skip('should store a card object for the current card in play', function() {
  //   const turn = new Turn();
  //   expect(turn.card).to.equal({});
  // });

});
