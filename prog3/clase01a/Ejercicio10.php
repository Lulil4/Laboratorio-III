<?php

$impares = array();

for ($i = 0; $i < 100; $i++)
{
    if ($i %2 == 0)
    {
        array_push($impares, $i);
    }
    
    if (count($impares) == 10)
    {
    break;
    }
}
var_dump($impares);
?>