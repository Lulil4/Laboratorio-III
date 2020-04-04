"use strict";
function firstTwentyEvens() {
    var numero;
    var i;
    var numeros = 0;
    var esPar;
    for (numero = 2; numero < 100; numero++) {
        esPar = true;
        for (i = 2; i < numero - 1; i++) {
            if (numero % i == 0) {
                esPar = false;
                break;
            }
        }
        if (esPar) {
            console.log(numero);
            numeros++;
        }
        if (numeros == 20) {
            break;
        }
    }
}
firstTwentyEvens();
//# sourceMappingURL=Ejercicio07.js.map