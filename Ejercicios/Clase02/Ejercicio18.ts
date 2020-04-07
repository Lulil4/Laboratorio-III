function mostrarVoto() : void
{
    let checked = "";
    if ((<HTMLInputElement>document.getElementById("5")).checked)
    {
        checked = "Excelente";
    }
    else if ((<HTMLInputElement>document.getElementById("4")).checked)
    {
        checked = "Muy bueno";
    }
    else if ((<HTMLInputElement>document.getElementById("3")).checked)
    {
        checked = "Bueno";
    }
    else if ((<HTMLInputElement>document.getElementById("2")).checked)
    {
        checked = "Regular";
    }
    else if ((<HTMLInputElement>document.getElementById("1")).checked)
    {
        checked = "Malo";
    }

    alert(checked);
    console.log(checked);
}