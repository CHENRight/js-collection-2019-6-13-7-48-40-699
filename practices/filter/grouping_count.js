'use strict';

function grouping_count(collection) {

  //implement here
  let result = {};
  collection.forEach(item =>{
    result[item] = result[item] >= 1 ? result[item] + 1 : 1;
  })

  return result;
}

module.exports = grouping_count;
