function Calcular(): void {
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let operador;
    let primerOperando : number = parseInt((<HTMLInputElement>document.getElementById("txtNum1")).value);
    let segundoOperando : number = parseInt((<HTMLInputElement>document.getElementById("txtNum2")).value);
    let resultado : number = 0;

    for (let i = 0; i < inputs.length; i++) 
    {
        if (inputs[i].type == "radio" && inputs[i].checked) 
        {
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