// Code your solution in this file!
let distanceFromHqInBlocks = (num) => {
    return Math.abs(num - 42);
}

let distanceFromHqInFeet = (num) => {
    return distanceFromHqInBlocks(num) * 264;
}

let distanceTravelledInFeet = (start, end) => {
    return Math.abs((start - end) * 264);
}

let calculatesFarePrice = (start,end) => {
    let dist = distanceTravelledInFeet(start, end)

    if (dist < 400) {
        return 0 
    }
    else if (dist > 400 && dist < 2000) {
        return (dist - 400)* 0.02
    }
    else if (dist > 2000 && dist < 2500){
        return 25
    }
    else{
        return 'cannot travel that far' 
    }
}