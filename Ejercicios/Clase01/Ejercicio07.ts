function firstTwentyEvens() : void {

var numero : number;
var i : number;
var numeros : number = 0;
var esPar : boolean;

    for (numero = 2; numero < 100; numero++){

        esPar = true;

        for (i = 2; i < numero - 1; i++){

            if (numero % i == 0){
                esPar = false;
                break;
            }      
        }

        if (esPar){
            console.log(numero);
            numeros++;
        }

        if (numeros == 20){
            break;
        }  
    }

}

firstTwentyEvens();