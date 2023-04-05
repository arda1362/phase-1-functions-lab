function distanceFromHqInBlocks(someValue) {
 if (someValue > 42){
    return Math.abs(someValue - 42);
 }
 if (someValue < 42){
    return Math.abs(42 - someValue);
 }
  }
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let feet = 264
    if (someValue > 42){
        return Math.abs(someValue - 42)*feet;
     }
     if (someValue < 42){
        return Math.abs(42 - someValue)*feet;
     }

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    let feet = 264
    let someValue = (start - destination)
    if (someValue> 0){
        return Math.abs(someValue)*feet;
     }
     if (someValue < 0){
        return Math.abs(-someValue)*feet;
     }
  }
  function calculatesFarePrice(start, destination) {
    let someValue = distanceTravelledInFeet(start, destination)
    if (someValue <= 400){
        return 0;
    }
    else if (someValue > 400 && someValue <=2000){
        return Math.abs(someValue-400)*0.02;
    }
    else if (someValue > 2000 && someValue <= 2500){
        return 25;
    }
    else if (someValue > 2500){
        return 'cannot travel that far';
    }
    }
    