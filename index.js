// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const hq = 42
    if(location < hq) {
      return hq - location
    }
    else if (location > hq) {
      return location - hq
    }
}
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(a, b) {
  if(a < b) {
    return (b - a) * 264
  }
  else if (a > b) {
    return (a - b) * 264
  }
}
function calculatesFarePrice(start, destination) {
  const totalDistance = distanceTravelledInFeet(start, destination)
  if(totalDistance < 400) {
    return 0
  }
  else if (totalDistance > 400 && totalDistance < 2000) {
    return (totalDistance - 400) * .02
  }
  else if (totalDistance > 2000 && totalDistance < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
