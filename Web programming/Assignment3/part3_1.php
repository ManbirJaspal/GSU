<?php
$month = array('January', 'February', 'March', 'April',
'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December');
$arrlen = count($month);
for($i = 0; $i < $arrlen; $i++) {
    echo $month[$i];
    echo "<br>";
}
?>