const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});
    const deck = new Deck([card3]);

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
    });

  it('should be able to hold cards', function() {

    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);
    deck.countCards();
    });

  it('should be able to count how many cards are in the deck', function() {
    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});
    const card3 = new Card({id:12, question:'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer:'playing with bubble wrap'});

    const deck = new Deck([card1, card2, card3]);

   expect(deck.countCards()).to.equal(3);
   });

});
