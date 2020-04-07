"use strict";
function mostrarVoto() {
    var checked = "";
    if (document.getElementById("5").checked) {
        checked = "Excelente";
    }
    else if (document.getElementById("4").checked) {
        checked = "Muy bueno";
    }
    else if (document.getElementById("3").checked) {
        checked = "Bueno";
    }
    else if (document.getElementById("2").checked) {
        checked = "Regular";
    }
    else if (document.getElementById("1").checked) {
        checked = "Malo";
    }
    alert(checked);
    console.log(checked);
}
//# sourceMappingURL=Ejercicio18.js.map