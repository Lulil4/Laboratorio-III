<?php
$num = 33;
$uStr = substr($num, 1, 1);
$dStr = substr($num, 0, 1);
$numU;
$numD;

switch ($uStr)
{
case 9:
$numU = "NUEVE";
break;
case 8:
$numU = "OCHO";
break;
case 7:
$numU = "SIETE";
break;
case 6:
$numU = "SEIS";
break;
case 5:
$numU = "CINCO";
break;
case 4:
$numU = "CUATRO";
break;
case 3:
$numU = "TRES";
break;
case 2:
$numU = "DOS";
break;
case 1:
$numU = "UNO";
break;
case 0:
$numU = "";
break;
default:
echo "error";
break;
} 

switch ($dStr)
{
    case 6:
    $numD = "SESENTA Y ";
    break;
    case 5:
    $numD = "CINCUENTA Y ";
    break;
    case 4:
    $numD = "CUARENTA Y";
    break;
    case 3:
    $numD = "TREINTA Y ";
    break;
    case 2:
    $numD = "VEINTI";
    break;
    default:
    echo "error";
    break;
}

echo $numD . $numU;

?>