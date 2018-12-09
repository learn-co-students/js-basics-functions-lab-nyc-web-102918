function distanceFromHqInBlocks(pickup) {
  return pickup < 42 ? (42 - pickup) : (pickup - 42)
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
  let blocks = Math.max(pickup, dropoff) - Math.min(pickup, dropoff)
  return blocks * 264
}

function calculatesFarePrice(pickup, dropoff) {
  let feet = distanceTravelledInFeet(pickup, dropoff)
  if (feet > 2500) {
    return 'cannot travel that far'
  }
  else if (feet > 2000) {
    return 25
  }
  else if (feet > 400) {
    return (feet - 400) * .02
  }
  else {
    return 0
  }
}
