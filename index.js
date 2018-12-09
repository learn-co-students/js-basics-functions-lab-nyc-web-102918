
function distanceFromHqInBlocks(location) {
  const headquarters = 42
  if (location > 42) {
    return location - headquarters
  } else if (location < 42) {
    return headquarters - location
  }
}

function distanceFromHqInFeet(location) {
  let distance = distanceFromHqInBlocks(location)
  return distance * 264
}

function distanceTravelledInFeet(location, distance) {
  let distanceTravelled = 0
  if (location < distance) {
    distanceTravelled = distance - location;
    return distanceTravelled * 264;
  } else if (location > distance) {
    distanceTravelled = location % distance
    return distanceTravelled * 264;
  }
}

// function calculatesFarePrice(start, destination) {
//   let fare = distanceTravelledInFeet(start, destination)
//   let cost = .02
//   if (fare < 400) {
//     return 0
//   } else if (fare > 400 && < 2000) {
//     return cost * fare
//   } else if (fare > 2000 && < 2500) {
//     return 25
//   } else if (fare > 2000) {
//     return 'cannot travel that far'
//   }
// }

function calculatesFarePrice(start, destination) {
  let feetDistance
  let farePrice
  let chargedFeetDistance
   feetDistance = distanceTravelledInFeet(start, destination)
   // farePrice = ((feetDistance - 400) * .02).toFixed(2)
   if (feetDistance <= 400) {
    farePrice = 0
  } else if (feetDistance > 400) {
    chargedFeetDistance = feetDistance - 400
    if (feetDistance <= 2000) {
      farePrice = (chargedFeetDistance * .02)
    } else if (feetDistance > 2000) {
      if (feetDistance <= 2500) {
        farePrice = 25
      } else {
        return "cannot travel that far"
      }
    }
  }
   return farePrice
}
