<?php
$accum = 0;

for($i = 0; ; $i++)
{
    if ($accum + $i < 1000)
    {
        $accum += $i;
        echo $i . "<br>";
    }    
}
echo $accum;
?>