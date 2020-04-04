<?php
$animals = array();
$years = array();
$languages = array();

array_push($animals, "Perro", "Gato", "Ratón", "Araña", "Mosca");
array_push($years, "1986", "1996", "2015", "78", "86");
array_push($languages, "php", "mysql", "html5", "typescript", "ajax");

$merge = array_merge($animals, $years, $languages);

var_dump($merge);

?>