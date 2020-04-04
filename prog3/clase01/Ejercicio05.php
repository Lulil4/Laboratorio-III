<?php

    $a = 3;
    $b = 2;
    $c = 2;

    echo $a . "<br>" . $b . "<br>" . $c . "<br>";

    if ($a > $b && $a < $c || $a < $b && $a > $c)
    {
        echo $a;
    }
    else if ($b > $a && $b < $c || $b < $a && $b > $c)
    {
        echo $b;
    }
    else if ($c > $a && $c < $b || $c < $a && $c > $b)
    {
        echo $c;
    }
    else
    {
        echo "no ay por que";
    }
?>