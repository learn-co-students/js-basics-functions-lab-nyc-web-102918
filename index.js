// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {

  // HQ is 42nd, parameter will give you the pick up location, you substract from each other to find out how many blocks it is between them.
  // returns the number of blocks from Scuber's HQ to pickup location

  return Math.abs(42 - pickUpLocation);
}

function distanceFromHqInFeet(pickUpLocation) {
  // returns number of feet from Scubers HQ to pickup location in feet
  const block = 264;
  return distanceFromHqInBlocks(pickUpLocation) * block;
}

function distanceTravelledInFeet (loc1, loc2) {
// helper to return correct value
  const block = 264;
  const blocksTravelled = Math.abs(loc2 - loc1);
  return blocksTravelled * block;
}

function calculatesFarePrice(loc1, loc2) {
  const distance = distanceTravelledInFeet(loc1, loc2);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
