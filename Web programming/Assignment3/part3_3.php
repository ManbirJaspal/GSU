<?php
echo "<h2>Display with Foreach</h2>";
$month = array('January', 'February', 'March', 'April',
'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December');

$arrlen = count($month);

foreach($month as $order){
    echo "$order<br>";
}
?>

<?php
echo "<br>";
echo "<h2>Alphabetical Order with Foreach</h2>";
$month = array('January', 'February', 'March', 'April',
'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December');
sort($month);

foreach($month as $alphaorder){
    echo "$alphaorder<br>";
}
?>