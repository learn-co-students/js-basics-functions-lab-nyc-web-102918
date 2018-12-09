// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distanceFromHQ
  distanceFromHQ = Math.abs(42 - location)
  return distanceFromHQ
}

function distanceFromHqInFeet(location) {
  let blockDistance
  let feetDistance

  blockDistance = distanceFromHqInBlocks(location)
  feetDistance = blockDistance * 264
  return feetDistance
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let blockDistance
  let feetDistance

  blockDistance = Math.abs(startBlock - endBlock)
  feetDistance = blockDistance * 264
  return feetDistance
}

function calculatesFarePrice(startBlock, endBlock) {
  let feetDistance
  let farePrice
  let chargedFeetDistance

  feetDistance = distanceTravelledInFeet(startBlock, endBlock)

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
