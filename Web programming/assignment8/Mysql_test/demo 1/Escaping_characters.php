<?php

//mysql> CREATE TABLE IF NOT EXISTS Authors(Id INT PRIMARY KEY AUTO_INCREMENT, 
// Name VARCHAR(25) ;

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

$name = "O'Money";
$name_es = mysql_real_escape_string($name);

$query = "INSERT INTO Authors(Name) VALUES('$name_es')";
$rs = mysql_query($query);

if (!$rs) {
    echo "Could not execute query: $query\n";
    trigger_error(mysql_error(), E_USER_ERROR); 
} else {
    echo "Query: $query executed\n";
} 

mysql_close();

?>