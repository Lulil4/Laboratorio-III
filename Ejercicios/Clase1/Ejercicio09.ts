import { theCube } from "./Ejercicio06";
import {factorial} from "./Ejercicio08";

function factorialOCubo(numero : number) : void{
    if (numero > 0)
    {
        factorial(numero);
    }
    else if (numero == 0)
    {
        console.log("nada xd");
    }
    else
    {
        theCube(numero);
    }
}

factorialOCubo(3);