<?php
$animals = array();
$years = array();
$languages = array();

$indexado = array();
$asociativo = array();

array_push($animals, "Perro", "Gato", "Ratón", "Araña", "Mosca");
array_push($years, "1986", "1996", "2015", "78", "86");
array_push($languages, "php", "mysql", "html5", "typescript", "ajax");

array_push($indexado, $animals, $years, $languages);

array_push($asociativo, ["Animales" => $v1], ["Años" => $v2], ["Lenguajes" => $v3]);

foreach($indexado as $item)
{
    print_r($item);
    echo "<br>";
}
 
echo "<br>";

foreach($asociativo as $k => $item)
{
    echo $k;
    print_r($item);
    echo "<br>";
}
?>