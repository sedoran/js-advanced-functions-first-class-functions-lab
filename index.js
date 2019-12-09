// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return [drivers[0], drivers[1]]
}

function returnLastTwoDrivers(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, callback) {
  return callback(drivers)
}