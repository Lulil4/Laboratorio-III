<?php
$lapicera1 = array(
    "color"=>"azul",
    "marca"=>"bic",
    "trazo"=>"fino",
    "precio"=>200
    );
$lapicera2 = array(
    "color"=>"negro",
    "marca"=>"maped",
    "trazo"=>"medio",
    "precio"=>300
    );

$lapicera3 = array(
    "color"=>"verde",
    "marca"=>"nose",
    "trazo"=>"medio",
    "precio"=>500
    );

echo $lapicera1["color"] . " " . $lapicera1["marca"] . " " . $lapicera1["trazo"] . " " . $lapicera1["precio"];
echo "<br>";
echo $lapicera2["color"] . " " . $lapicera2["marca"] . " " . $lapicera2["trazo"] . " " . $lapicera2["precio"];
echo "<br>";
echo $lapicera3["color"] . " " . $lapicera3["marca"] . " " . $lapicera3["trazo"] . " " . $lapicera3["precio"];

?>