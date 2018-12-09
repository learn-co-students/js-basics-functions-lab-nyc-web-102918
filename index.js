// Code your solution in this file!

function distanceFromHqInBlocks(unit){
 if (unit>=42){return unit-42;}
 else{ return 42-unit;}
}

function distanceTravelledInFeet(begin, end){
  return Math.abs((end-begin)*264);
}


function distanceFromHqInFeet(unit){
  return distanceTravelledInFeet(0,distanceFromHqInBlocks(unit));
}
function calculatesFarePrice(start,end){
  let feet=distanceTravelledInFeet(start,end);
  let price;
  switch(true){
      case feet<400:
        price=0
        break;
      case feet>2500:
        return "cannot travel that far"

      case feet>2000:
         price=25
         break
         default: price=0.02*(feet-400);


  }
return price;
}
