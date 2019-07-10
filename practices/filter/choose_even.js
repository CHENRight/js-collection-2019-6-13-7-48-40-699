'use strict';

function choose_even(collection) {


  return  collection.filter((number) => number % 2 === 0);
  //implement here
}

module.exports = choose_even;
