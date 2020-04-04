<?php
$array = array();
$promedio = 0;

for ($i = 0; $i < 5; $i++)
{
    array_push($array, rand(0,10));
    //  $array[$i] = rand(0, 10);
}

echo "los numeros son xd :" . "<br>";

foreach($array as $item){
    echo $item . "<br>";
    $promedio += $item;
}

$promedio = $promedio / $i;

if ($promedio >= 6){
    echo "el promedio es mayor a 6";
}
else{
    echo "el promedio es menor a 6"; 
}
?>