<?php
echo date('jS l');
echo "<br>";
echo date("d  F  y");
echo "<br>";
echo date('Y-m-d H:i:s');

//estaciones, by alan ezequiel

$dia = intval(date("z"));
$bisiesto = intval(date("L"));

$otono = 79;
$invierno = 172;
$primavera = 265;
$verano = 352;

if($bisiesto == 1)
{
    $otono = 80;
    $invierno = 173;
    $primavera = 266;
    $verano = 353;
}
if($dia >= $otono && $dia < $invierno) 
{        
    $estacion = "Otoño";

} 
elseif($dia >= $invierno && $dia < $primavera) 
{
    $estacion = "Invierno";
} 
elseif($dia >= $primavera && $dia < $verano)
{
    $estacion = "Primavera";
} 
elseif ($dia >= $verano || $dia < $otono )
{
    $estacion = "Verano";
}

echo $estacion;

?>