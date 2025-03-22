// Code your solution in this file!
const headquaters = 42 ;
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - headquaters);
  }
function distanceFromHqInFeet(someValue) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(someValue) * 264;
  }
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264
}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination)
    if (distanceTravelledInFeet(start, destination) <= 400)
        return 0
    if(distance >400 && distance <= 2000)
        return (distance - 400) * 0.02;
    if(distance > 2000 && distance <= 2500)
        return 25
    if(distance > 2500)
        return 'cannot travel that far'
  }
