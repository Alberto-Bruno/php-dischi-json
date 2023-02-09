<?php
$dischi = file_get_contents("disk.json");
$dischi = json_decode($dischi, true);

header("Content-Type: application/json");
echo json_encode($dischi);