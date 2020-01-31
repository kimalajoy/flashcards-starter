const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a object', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const turn = new Turn('guess', card3);
    expect(turn).to.be.a('object');
  });

  it('should be an instance of a Turn', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const turn = new Turn('guess', card3);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instatiated with a guess and a card', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const turn = new Turn('playing with bubble wrap', card3);
    expect(turn.guess).to.equal('playing with bubble wrap');
    expect(turn.card).to.equal(card3);
  });

  it('should return a guess', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const turn = new Turn('playing with bubble wrap', card3);
    expect(turn.returnGuess()).to.equal('playing with bubble wrap');
  });

  it('should return a card', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const turn = new Turn('playing with bubble wrap', card3);
    expect(turn.returnCard()).to.equal(card3);
  });

  it('should evaluate whether the guess is true or false', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const turn = new Turn('lobster', card3);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should let the player know whether the guess is correct or incorrect', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const turn = new Turn('monster trucks', card3);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
