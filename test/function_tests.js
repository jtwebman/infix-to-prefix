'use strict';

var expect = require('must');

describe('function infix to prefix tests', function() {
  var infixToPrefix = require('../function');

  it('3 becomes 3', function() {
    expect(infixToPrefix('3')).to.equal('3');
  });

  it('1 + 2 becomes + 1 2', function() {
    expect(infixToPrefix('1 + 2')).to.equal('+ 1 2');
  });

  it('3 + 1 - 2 becomes - + 3 1 2', function() {
    expect(infixToPrefix('3 + 1 - 2')).to.equal('- + 3 1 2');
  });

  it('1 + 2 * 5 becomes + 1 * 2 5', function() {
    expect(infixToPrefix('1 + 2 * 5')).to.equal('+ 1 * 2 5');
  });

  it('2 + 3 * 4 / 5 becomes + 2 / * 3 4 5', function() {
    expect(infixToPrefix('2 + 3 * 4 / 5')).to.equal('+ 2 / * 3 4 5');
  });

  it('1 + 3 * 4 - 8 becomes - + 1 * 3 4 8', function() {
    expect(infixToPrefix('1 + 3 * 4 - 8')).to.equal('- + 1 * 3 4 8');
  });

});
