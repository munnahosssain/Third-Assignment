/*Github file url::  https://github.com/munnahosssain/Third-Assignment*/
function kilometerToMeter(number) {
    let duplicateNum = number;
    if (number <= 0) {
        console.log("Warning!, You should be positive number.");
    }
    else if (number == 1) {
        console.log(duplicateNum, "Kilometer is equal to: ");
    }
    else {
        console.log(duplicateNum, "Kilometers is equal to: ");
    }
    let storeNumber = number * 10 * 100;
    return storeNumber;
}
let result = kilometerToMeter(110);//Pre define user input
if (result <= 0) {
    console.log();
}
else {
    console.log(result, " Meters");
}