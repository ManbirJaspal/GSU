<?php
$month = array('January', 'February', 'March', 'April',
'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December');
sort($month);

$monthLen = count($month);

for($i = 0; $i < $monthLen; $i++){
    echo $month[$i];
    echo '<br>';
}
?>