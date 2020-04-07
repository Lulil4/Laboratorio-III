function mostrar() : void
{
    alert((<HTMLInputElement>document.getElementById("txtDni")).value + "\n" + (<HTMLInputElement>document.getElementById("txtNombre")).value + "\n" +(<HTMLInputElement>document.getElementById("emailUno")).value + "\n" + (<HTMLInputElement>document.getElementById("textareaCv")).value);
}