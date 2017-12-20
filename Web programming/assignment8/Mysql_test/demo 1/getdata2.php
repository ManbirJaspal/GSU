<?php

$host = "localhost"; 
$user = "mjaspal1"; 
$pass = "mjaspal1"; 
$db = "mjaspal1"; 

$r = mysql_connect($host, $user, $pass);

if (!$r) {
    echo "Could not connect to server\n";
    trigger_error(mysql_error(), E_USER_ERROR);
} else {
    echo "Connection established\n"; 
}

$r2 = mysql_select_db($db);

if (!$r2) {
    echo "Cannot select database\n";
    trigger_error(mysql_error(), E_USER_ERROR); 
} else {
    echo "Database selected\n";
}

$query = "SELECT Id, Name, Price From Cars LIMIT 5";

$rs = mysql_query($query);

if (!$rs) {
    echo "Could not execute query: $query";
    trigger_error(mysql_error(), E_USER_ERROR); 
} else {
    echo "Query: $query executed\n";
} 

$nrows = mysql_num_rows($rs);

for ($i = 0; $i < $nrows; $i++) {
    $row = mysql_fetch_row($rs);
    echo $row[0];
    echo " ";
    echo $row[1];
    echo " ";
    echo $row[1];
    echo "\n";
}

mysql_close();

?>