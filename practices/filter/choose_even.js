'use strict';

function choose_even(collection) {

  //first method
  // const conditionEven = (num) => num % 2 === 0;
  // return collection.filter(conditionEven);
  //second method
  return  collection.filter((number) => number % 2 === 0);
  //implement here
}

module.exports = choose_even;
