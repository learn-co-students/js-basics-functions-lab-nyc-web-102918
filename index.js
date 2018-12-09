// Code your solution in this file!
//Returns the number of blocks from Scuber's headquarters to the pickup location.

function distanceFromHqInBlocks(num_pickup){

  return Math.abs(42 - num_pickup);

}



function distanceFromHqInFeet(num_pickup){

  return distanceFromHqInBlocks(num_pickup) * 264;

}

function distanceTravelledInFeet(location_1,location_2){

  return Math.abs((location_1 - location_2))*264;

}

// Given the same starting and ending block as the previous test (hint hint), return the fare for the customer.
// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per
// foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet
// and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns
// 'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(location_1, location_2) {
  distance = distanceTravelledInFeet(location_1, location_2);

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
