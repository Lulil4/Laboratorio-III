function mostrarPeli() : void
{
    let lasPelis = "";
    if ((<HTMLInputElement>document.getElementById("peliculaUno")).checked)
    {
        lasPelis += (<HTMLInputElement>document.getElementById("peliculaUno")).value;
    }
    
    if ((<HTMLInputElement>document.getElementById("peliculaDos")).checked)
    {
        lasPelis+= "\n";
        lasPelis += (<HTMLInputElement>document.getElementById("peliculaDos")).value;
    }

    alert(lasPelis);
}