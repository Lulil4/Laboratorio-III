export function factorial(numero : number) : void{

var i : number = 1;
var factorial : number = numero;

while (i < numero)
{
    factorial = factorial * i
    i++;
}

console.log(factorial);
}
