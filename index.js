// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation > 42) {
        return pickupLocation - 42
    } else {
        return 42- pickupLocation}
    }


// block = 264 feet

  function distanceFromHqInFeet(distance) {
    result = distanceFromHqInBlocks(distance)
        return result * 264
  };


  function distanceTravelledInFeet(loc1, loc2){
    if ( loc1 > loc2) {
        return ((loc1 - loc2) * 264)
    } else {
        return ((loc2 -loc1) * 264)
    }
  };


  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
      if (distance < 400){
        return 0
      }
      else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
      }
      else if (distance > 2000 && distance < 2500) {
        return 25
      }
      else {
        return "cannot travel that far"
      }
    };
