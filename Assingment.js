/*Github file url::  https://github.com/munnahosssain/Third-Assignment */
/* first source code:*/
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

/*Second source code:*/
function budgetCalculator(num1, num2, num3) {
    if (num1 < 0 && num2 < 0 && num3 < 0) {
        console.log('Warning!, You should be positive number.');
    }
    else {
        let forWatch = num1 * 50;
        let forPhone = num2 * 100;
        let forLaptop = num3 * 500;
        let totalCost = forWatch + forPhone + forLaptop;
        return totalCost;
    }
}
let result = budgetCalculator(15, 10, 5);
console.log(result);

/*Third source code:*/
function hotelCost(days) {
    if (days <= 0) {
        console.log("Warning!, Your input is wrong");
    }
    else if (days <= 10) {
        stayDays = days * 100;
    }
    else if (days <= 20) {
        let first1To10Days = 10 * 100;
        let oldDays = days - 10;
        let second11To20Days = oldDays * 80;
        let stayDays = first1To10Days + second11To20Days;
    }
    else {
        first1To10Days = 10 * 100;
        second11To20Days = 10 * 80;
        oldDays = days - 20;
        let ThirdPart = oldDays * 50;
        stayDays = first1To10Days + second11To20Days + ThirdPart;
    }
    return stayDays;
}
let result=hotelCost(21);//How long will you stay at the hotel()
console.log(result);

/*Forth source code:*/
function megaFriend(arr) {
    var lgth = 0;
    var longest;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
let result = megaFriend(["Jaman", "Sajol", "Chisth", "Abdullah", "Mohammad-ali"])
console.log(result);