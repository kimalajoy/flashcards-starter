const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});
    const card = new Card(card3);

    expect(card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const card = new Card(card3);
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const card = new Card(card3);
    expect(card.question).to.equal('What is Travis\'s favorite stress reliever?');
  });

  it('should store a list of possible answers', function() {
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const card = new Card(card3);
    expect(card.answers).to.deep.equal(['listening to music', 'watching Netflix', 'playing with bubble wrap']);
  });

  it('should store the correct answer', function() {
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});

    const card = new Card(card3);
    expect(card.correctAnswer).to.equal('playing with bubble wrap');
  });
});
