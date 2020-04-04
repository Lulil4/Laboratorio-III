function esPalindromo(oracion : string) : void{
    
    var es : boolean = true;

    oracion = oracion.toLowerCase().replace(/\s+/g, '');
    console.log(oracion);
    for (let i : number = 0; i < (oracion.length / 2) -1; i++){
        
        if (oracion[i] != ' ' && oracion[oracion.length - 1 - i] != ' '){

            if (oracion[i] != oracion[oracion.length - 1 - i])
            {
                es = false;
                break;
            }
        }
    }

    console.log(es);
}

esPalindromo("La ruta nos aporto otro paso natural");