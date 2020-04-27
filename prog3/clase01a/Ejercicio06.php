<?php

    $operador = "/";
    $op1 = 0;
    $op2 = 2;

    switch ($operador)
    {
        case "+":
            echo $op1 + $op2;
        break;
        case "-":
            echo $op1 - $op2;
        break;
        case "*":
            echo $op1 * $op2;
        break;
        case "/":
            if ($op1 != 0)
            {
            echo $op1 / $op2;
            }
        break;
    }
?>