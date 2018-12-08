// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42);
}


function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(location, hq) {
    return Math.abs(location - hq) * 264;
}

function calculatesFarePrice(location, hq){
    let feet = distanceTravelledInFeet(location, hq); 
    
    if (feet <= 400){
        return 0;
    } 
    else if (feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02;
    } 
    else if (feet > 2000 && feet <= 2500){
        return 25;
    } 
    else {
        return 'cannot travel that far';
    }
}