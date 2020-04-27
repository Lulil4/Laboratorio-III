<?php
class Producto
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	private $codBarra;
 	private $nombre;
  	private $pathFoto;
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
	public function GetCodBarra()
	{
		return $this->codBarra;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetPathFoto()
	{
		return $this->pathFoto;
	}

	public function SetCodBarra($valor)
	{
		$this->codBarra = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetPathFoto($valor)
	{
		$this->pathFoto = $valor;
	}

//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($codBarra=NULL, $nombre=NULL, $pathFoto=NULL)
	{
		if($codBarra !== NULL && $nombre !== NULL){
			$this->codBarra = $codBarra;
			$this->nombre = $nombre;
			$this->pathFoto = $pathFoto;
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->codBarra." - ".$this->nombre." - ".$this->pathFoto."\r\n";
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODOS DE CLASE
	public static function Guardar($obj)
	{
		$resultado = FALSE;
		
		//ABRO EL ARCHIVO
		$ar = fopen("archivos/productos.txt", "a");
		
		//ESCRIBO EN EL ARCHIVO
		$cant = fwrite($ar, $obj->ToString());
		
		if($cant > 0)
		{
			$resultado = TRUE;			
		}
		//CIERRO EL ARCHIVO
		fclose($ar);
		
		return $resultado;
	}
	public static function TraerTodosLosProductos()
	{
		$ListaDeProductosLeidos = array();

		//leo todos los productos del archivo
		$archivo=fopen("archivos/productos.txt", "r");
		
		while(!feof($archivo))
		{
			$archAux = fgets($archivo);
			$productos = explode(" - ", $archAux);
			//http://www.w3schools.com/php/func_string_explode.asp
			$productos[0] = trim($productos[0]);
			if($productos[0] != ""){
				$productos[2] = trim($productos[2]);
				$ListaDeProductosLeidos[] = new Producto($productos[0], $productos[1],$productos[2]);
			}
		}
		fclose($archivo);
		
		return $ListaDeProductosLeidos;
	}

	public static function Modificar($obj)
	{
		$resultado = FALSE;
		
		//OBTENGO TODOS LOS PRODUCTOS
		$productos = Producto::TraerTodosLosProductos();
		//RECORRO Y BUSCO LA IMAGEN ANTERIOR. REEMPLAZO POR EL OBJ. MODIFICADO
		foreach($productos as $producto){
			if($producto->GetCodBarra() == $obj->GetCodBarra()){
				//BORRO LA IMAGEN ANTERIOR
				Archivo::Borrar("archivo/" . $producto->GetPathFoto());
				$producto->SetPathFoto($obj->GetPathFoto());
				$producto->SetNombre($obj->GetNombre());
				$resultado = TRUE;
				break;
			}
		}
		
		//ABRO EL ARCHIVO
		$archivo = fopen("archivos/productos.txt", "w");
		//ESCRIBO EN EL ARCHIVO
		foreach($productos as $producto){
			fwrite($archivo, $producto->ToString());
		}
		//CIERRO EL ARCHIVO
		fclose($archivo);

		return $resultado;
	}

	public static function Eliminar($codBarra)
	{
		$resultado = FALSE;
		
		//OBTENGO TODOS LOS PRODUCTOS
		$productos = Producto::TraerTodosLosProductos();
		//RECORRO Y BUSCO LA IMAGEN ANTERIOR. 
		$i = 0;
		foreach($productos as $producto){
			if($producto->GetCodBarra() == $codBarra){
				//BORRO LA IMAGEN ANTERIOR
				Archivo::Borrar("archivos/" . $producto->GetPathFoto());
				unset($productos[$i]);
				$resultado = TRUE;
				break;
			}
			$i++;
		}
		
		$archivo = fopen("archivos/productos.txt", "w");
		//ESCRIBO EN EL ARCHIVO
		foreach($productos as $producto){
			fwrite($archivo, $producto->ToString());
		}
		//CIERRO EL ARCHIVO
		fclose($archivo);

		return $resultado;
	}
//--------------------------------------------------------------------------------//
}