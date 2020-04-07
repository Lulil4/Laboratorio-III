function hasCaps(myString : string) : void{

    if (myString === myString.toUpperCase())
    {
        console.log("grandote");
    }
    else if (myString === myString.toLowerCase())
    {
        console.log("chiquitito");
    }
    else
    {
        console.log("mezcla");
    }
}

hasCaps("hola");