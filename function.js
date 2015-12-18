'use strict';

var operators = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
};

function isNumeric(value){
  return !isNaN(value);
}

function isOperator(value) {
  return operators[value];
}

function reverseByPrecedence(operatorLocations) {
  return operatorLocations.reverse().sort(function(a, b){
    return a.precedence - b.precedence;
  });
}

function infixToPrefix(expression) {
  // split on whitespace
  var tokens = expression.trim().split(/\s+/).map(function(value) {
    return {
      value: value,
      outputted: false
    };
  });

  // Find all operators
  var operatorLocations = [];
  var i;

  for(i = 0; i < tokens.length; i++) {
    if (isOperator(tokens[i].value)) {
      operatorLocations.push({
        index: i,
        operator: tokens[i].value,
        precedence: operators[tokens[i].value]
      });
    }
  }

  if (operatorLocations.length <= 0) {
    return expression; //no operators
  } else {
    //sort in reverse precedence
    operatorLocations = reverseByPrecedence(operatorLocations);

    var output = '';
    var outputIndex = 0;

    for(i = 0; i < operatorLocations.length; i++) {
      var opLocation = operatorLocations[i];

      output += tokens[opLocation.index].value + ' ';
      tokens[opLocation.index].outputted = true;

      if (outputIndex === opLocation.index - 1) {
        output += tokens[opLocation.index - 1].value + ' ';
        tokens[opLocation.index - 1].outputted = true;
        outputIndex++;
      }
    }

    // output remaining not outputed tokens
    for(i = 0; i < tokens.length; i++) {
      if (!tokens[i].outputted) {
        output += tokens[i].value + ' ';
      }
    }

    return output.trim();
  }

}

module.exports = infixToPrefix;
