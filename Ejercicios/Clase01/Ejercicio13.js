"use strict";
function sumDigits(myNumber) {
    var numberString = myNumber.toString();
    var sum = 0;
    for (var i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }
    return sum;
}
function getEvenFactorization(myNumber) {
    var sum = 0;
    while (myNumber % 2 == 0) {
        sum += 2;
        myNumber = myNumber / 2;
    }
    while (myNumber % 3 == 0) {
        sum += 3;
        myNumber = myNumber / 3;
    }
    while (myNumber % 5 == 0) {
        sum += 5;
        myNumber = myNumber / 5;
    }
    while (myNumber % 7 == 0) {
        sum += 7;
        myNumber = myNumber / 7;
    }
    while (myNumber % 11 == 0) {
        sum += sumDigits(11);
        myNumber = myNumber / 11;
    }
    console.log(sum);
    return sum;
}
function isSmithNumber(myNumber) {
    console.log(sumDigits(myNumber) == getEvenFactorization(myNumber));
}
isSmithNumber(378);
//# sourceMappingURL=Ejercicio13.js.map