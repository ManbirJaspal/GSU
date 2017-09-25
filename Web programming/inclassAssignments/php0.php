<?php

#Q1
echo '<p><i>"Good morning, Dave," said Hal.</i></p>';

#Q2
$radius = 5;
echo "The area of a circle with radius $radius is: " . M_PI * $radius * $radius;
echo "<br />";

#Q3
$celFahr = -450;
function convert($degrees){
   $celsius = (5/9)*($degrees - 32.00);
   return $celsius;
}
echo convert($celFahr);
echo "<br />";

#Q4
$text = " PHP is fun ";
$text = preg_replace("/[^A-Za-z]/","",$text);
echo "$text has ",strlen($text)," characters";
echo "<br />";

#Q5
$str = "WDWWLWWWLDDWDLL";
$poststr = "WWW";
$pos = strpos($str, $poststr);
echo "Answer is: " . substr($str, $pos + 3, 1);
echo "<br />";

#Q6
$str = "Malayalam";
$rev = " ";
for($j = strlen($str); $j >= 0; $j--){
 $rev = $rev . substr($str, $j, 1);
}
echo $rev;
if(strcasecmp($str, $rev) == 0){
 echo "strings are equal";
}
echo "<br />";

#Q7
$num = 7;
if($num % 2 == 0){
  echo "It's even";
}else{
  echo "It's odd";
}
echo "<br />";

#Q8
if(date(A) == 1){
  echo "<b>It is a leap year</b>";
}else{
  echo "<b>It isn't a leap year</b>";
}

?>