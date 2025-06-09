"use strict";

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function findClosestDegree(value ,degrees) {

  //assume first is closest
  let closest = degrees[0];

  //get min
  let min = Math.abs(value - degrees[0]);

  //check remaining ranges
  for (let i = 1; i < degrees.length; i++) {
    let currentdegree = degrees[i];
    let currentmin    = Math.abs(value - currentdegree);

    if (currentmin < min) {
      min     = currentmin;
      closest = currentdegree
    } else if (currentmin === min) {
      // keep last one, closest is the lower degree rather than the upper
    }
  }

  return closest;
}
