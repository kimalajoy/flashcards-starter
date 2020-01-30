const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', function(){
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should return the current card', function() {
    var cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card3,card2,card1]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should update turn count', function() {
    const round = new Round();
    expect(round.turnCount).to.equal(0);

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    round.takeTurn('a', card1);
    round.takeTurn('b', card2);
    round.takeTurn('c', card3);
    expect(round.turnCount).to.equal(3);
  });

  it('should record guess & record incorrect guess', function() {
    const round = new Round();
    expect(round.guesses.length).to.equal(0);

    const guess = 'cow';
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    round.takeTurn(guess, card2);

    expect(round.guesses[0]).to.equal(guess);
    expect(round.incorrectGuesses[0]).to.equal(card2.id);
  });

  it('should recognize correct guess', function() {
    const round = new Round();
    expect(round.guesses.length).to.equal(0);

    const guess = 'gallbladder';
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    round.takeTurn(guess, card2);

    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should return guess feedback', function() {
    const round = new Round();
    expect(round.guesses.length).to.equal(0);

    const guess = 'gallbladder';
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    var feedback = round.takeTurn(guess, card2);
    expect(feedback).to.equal('correct!');

    feedback = round.takeTurn('wrong!@!@!@', card2);
    expect(feedback).to.equal('incorrect!');
  });

  it('should calculate % correct guesses', function() {
    const round = new Round();
    expect(round.guesses.length).to.equal(0);

    const guess = 'gallbladder';
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    var feedback = round.takeTurn(guess, card2);
    expect(round.calculatePercentCorrect()).to.equal(1);

    feedback = round.takeTurn('wrong!@!@!@', card2);
    expect(feedback).to.equal('incorrect!');
    expect(round.calculatePercentCorrect()).to.equal(.5);
  });


  it('next card becomes current card', function() {
    var cards = [];
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card3,card2,card1]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card3);

    round.takeTurn('pancake', card3)
    expect(round.returnCurrentCard()).to.equal(card2);
  });
})
