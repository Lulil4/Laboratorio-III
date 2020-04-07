"use strict";
function Calcular() {
    var inputs = document.getElementsByTagName("input");
    var operador;
    var primerOperando = parseInt(document.getElementById("txtNum1").value);
    var segundoOperando = parseInt(document.getElementById("txtNum2").value);
    var resultado = 0;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "radio" && inputs[i].checked) {
            operador = inputs[i].value;
            break;
        }
    }
    switch (operador) {
        case "+":
            resultado = primerOperando + segundoOperando;
            break;
        case "-":
            resultado = primerOperando - segundoOperando;
            break;
        case "*":
            resultado = primerOperando * segundoOperando;
            break;
        case "/":
            resultado = primerOperando / segundoOperando;
            break;
    }
    alert(resultado);
    console.log(resultado);
}
//# sourceMappingURL=Ejercicio21.js.map