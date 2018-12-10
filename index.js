// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return street - 42;
  } else {
    return 42 - street;
  };
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet (start, end) {
  if (start >= end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  };
};

function calculatesFarePrice (start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * .02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  } else if (distanceInFeet >= 2500) {
    return 'cannot travel that far';
  }
}
