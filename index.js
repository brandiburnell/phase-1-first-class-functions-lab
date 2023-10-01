// Code your solution in this file!
const returnFirstTwoDrivers = function (driversNames) {
    return driversNames.slice(0, 2);
}

const returnLastTwoDrivers = function (driversNames) {
    return driversNames.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare*multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
//console.log(fareTripler(3));

function selectDifferentDrivers(names, driverChoice) {
    return driverChoice(names);
}