"use strict";
function esPalindromo(oracion) {
    var es = true;
    oracion = oracion.toLowerCase().replace(/\s+/g, '');
    console.log(oracion);
    for (var i_1 = 0; i_1 < (oracion.length / 2) - 1; i_1++) {
        if (oracion[i_1] != ' ' && oracion[oracion.length - 1 - i_1] != ' ') {
            if (oracion[i_1] != oracion[oracion.length - 1 - i_1]) {
                es = false;
                break;
            }
        }
    }
    console.log(es);
}
esPalindromo("La ruta nos aporto otro paso natural");
//# sourceMappingURL=Ejercicio11.js.map