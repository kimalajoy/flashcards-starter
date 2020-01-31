const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', function() {

  it('should be a object', function() {
    const round = new Round();
    expect(round).to.be.a('object');
  });

  it('should return the current card', function() {
    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const deck = new Deck([card3,card2,card1]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should update turn count', function() {
    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const deck = new Deck([card3,card2,card1]);
    const round = new Round(deck);
    expect(round.turnCount).to.equal(0);

    round.takeTurn('a');
    round.takeTurn('b');
    round.takeTurn('c');
    expect(round.turnCount).to.equal(3);
  });

  it('should record guess & record incorrect guess', function() {
    const guess = 'cow';
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});

    const deck = new Deck([card2]);
    const round = new Round(deck);
    expect(round.guesses.length).to.equal(0);
    round.takeTurn(guess);

    expect(round.guesses[0]).to.equal(guess);
    expect(round.incorrectGuesses[0]).to.equal(card2.id);
  });

  it('should recognize correct guess', function() {
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});

    const deck = new Deck([card2]);
    const round = new Round(deck);
    expect(round.guesses.length).to.equal(0);

    round.takeTurn(card2.correctAnswer);

    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should return guess feedback', function() {
    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});

    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.guesses.length).to.equal(0);

    var feedback = round.takeTurn(card1.correctAnswer);
    expect(feedback).to.equal('correct!');

    feedback = round.takeTurn('wrong!@!@!@');
    expect(feedback).to.equal('incorrect!');
  });

  it('should calculate % correct guesses', function() {
    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});

    var deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.guesses.length).to.equal(0);

    var feedback = round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);

    feedback = round.takeTurn('wrong!@!@!@');
    expect(feedback).to.equal('incorrect!');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('next card becomes current card', function() {
    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const deck = new Deck([card3,card2,card1]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card3);

    round.takeTurn('pancake');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should print a percent correct the end of the round', function() {
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});

    const deck = new Deck([card2]);
    const round = new Round(deck);
    var feedback = round.takeTurn(card2.correctAnswer);

var roundEndMessage = `‘** Round over! ** You answered 100% of the questions correctly!`

    expect(round.endRound()).to.equal(roundEndMessage)
  });

  it('should print a response about the end of the round', function() {
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});

    const deck = new Deck([card2]);
    const round = new Round(deck);
    var feedback = round.takeTurn(card2.correctAnswer);

    expect(feedback).to.equal('correct!')
  });

})
