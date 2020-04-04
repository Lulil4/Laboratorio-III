"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ejercicio06_1 = require("./Ejercicio06");
var Ejercicio08_1 = require("./Ejercicio08");
function factorialOCubo(numero) {
    if (numero > 0) {
        Ejercicio08_1.factorial(numero);
    }
    else if (numero == 0) {
        console.log("nada xd");
    }
    else {
        Ejercicio06_1.theCube(numero);
    }
}
factorialOCubo(3);
//# sourceMappingURL=Ejercicio09.js.map