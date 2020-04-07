"use strict";
function myFunction(myNumber, myString) {
    if (myNumber != 0) {
        if (myString) {
            for (var i_1 = 0; i_1 < myNumber; i_1++) {
                console.log(myString);
            }
        }
        else {
            console.log(1 / myNumber);
        }
    }
    else {
        console.log("The number is 0");
    }
}
myFunction(5);
//# sourceMappingURL=Ejercicio03.js.map