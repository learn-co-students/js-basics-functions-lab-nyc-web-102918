// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  const hq = 42;
  let distance;
  if (streetNumber >= 43) {
    distance = streetNumber - hq;
  }
  else {
    distance = hq - streetNumber;
  }
  return distance;
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber)*264;
  // footDistance = blockDistance * 264;
  // return footDistance;
}

function distanceTravelledInFeet(start, end) {
  let feetTravelled;
  if (start > end) {
    feetTravelled = (start - end) * 264;
  }
  else if (end > start) {
    feetTravelled = (end - start) * 264;
  }
  return feetTravelled;
}

function calculatesFarePrice(start, destination) {
  const ftDistance = distanceTravelledInFeet(start, destination);
  let fare;
  if (ftDistance < 400) {
    fare = 0;
  }
  else if (ftDistance > 400 && ftDistance < 2000) {
    fare = (ftDistance - 400) * .02;
  }
  else if (ftDistance > 2000 && ftDistance < 2500) {
    fare = 25;
  }
  else if (ftDistance > 2500) {
    fare = 'cannot travel that far';
  }
  return fare;
}
