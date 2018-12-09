// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  return Math.abs(value - 42);
}

function distanceFromHqInFeet(value) {
  return Math.abs(value - 42) * 264;
}

function distanceTravelledInFeet(loc1, loc2) {
  return Math.abs(loc1 - loc2) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0;
  }
  else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * .02;
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far'
  }
}
