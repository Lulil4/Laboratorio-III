/// <reference path="ajax.ts" />

window.onload = ():void => {
    Main.MostrarGrilla();
}; 

namespace Main{
    
        let ajax : Ajax = new Ajax();
    
        export function MostrarGrilla():void {

            let parametros:string = `queHago=mostrarGrilla`;

            ajax.Post("http://localhost/prog3/abm_archivos_starter/administracion.php", 
                        MostrarGrillaSuccess, 
                        parametros, 
                        Fail);            
        }

        export function AgregarProducto():void {

            let xhr : XMLHttpRequest = new XMLHttpRequest();
            let frm = (<HTMLFormElement>document.getElementById("frm"));
            let form : FormData = new FormData(frm);

            xhr.open('POST', 'http://localhost/prog3/abm_archivos_starter/administracion.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form);

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                        MostrarGrilla();
                }
            };
            
            /*
            let queHagoObj = (<HTMLInputElement>document.getElementById("hdnQueHago"));

            let frm = (<HTMLFormElement>document.getElementById("frm"));
            
            frm.action = "administracion.php";
            frm.method = "post";
            frm.submit();*/
                            
        }
        
        export function EliminarProducto(codBarra:number):void {

            if(!confirm("Desea ELIMINAR el PRODUCTO "+codBarra+"??")){
                return;
            }

            let parametros:string = `queHago=eliminar&codBarra=${codBarra}`;
            
            ajax.Post("http://localhost/prog3/abm_archivos_starter/administracion.php", 
            DeleteSuccess, 
            parametros, 
            Fail);
            
        }
    
        export function ModificarProducto(codBarra:number, nombre:string):void {

            (<HTMLInputElement>document.getElementById("codBarra")).value = codBarra.toString();
            (<HTMLInputElement>document.getElementById("nombre")).value = nombre;
            (<HTMLInputElement>document.getElementById("hdnQueHago")).value = "modificar";

            (<HTMLInputElement>document.getElementById("codBarra")).readOnly = true;
        }

        function MostrarGrillaSuccess(grilla:string):void {
            console.clear();
            console.log(grilla);
            (<HTMLDivElement>document.getElementById("divGrilla")).innerHTML = grilla;
            (<HTMLInputElement>document.getElementById("hdnQueHago")).value = "agregar";
            (<HTMLInputElement>document.getElementById("codBarra")).value = "";
            (<HTMLInputElement>document.getElementById("codBarra")).readOnly = false;
            (<HTMLInputElement>document.getElementById("nombre")).value = "";
            (<HTMLInputElement>document.getElementById("archivo")).value = "";
        }

        function DeleteSuccess(retorno:string):void {
            console.clear();
            console.log(retorno);
            alert(retorno);
            MostrarGrilla();
        }
    
        function Fail(retorno:string):void {
            console.clear();
            console.log(retorno);
            alert("Ha ocurrido un ERROR!!!");
        }
    
}