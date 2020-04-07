"use strict";
function mostrarPeli() {
    var lasPelis = "";
    if (document.getElementById("peliculaUno").checked) {
        lasPelis += document.getElementById("peliculaUno").value;
    }
    if (document.getElementById("peliculaDos").checked) {
        lasPelis += "\n";
        lasPelis += document.getElementById("peliculaDos").value;
    }
    alert(lasPelis);
}
//# sourceMappingURL=Ejercicio17.js.map