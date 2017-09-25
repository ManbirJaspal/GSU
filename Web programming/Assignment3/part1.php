<?php
	function isBitten(){
      $randm = rand(1, 50);
        if($randm <= 25){
			echo "<br>Charlie ate my lunch!";
		}
		else{
			echo "<br>Charlie did not eat my lunch!";
		}
	}
?>

<html>
<head>
    <title>IsBitten</title>
    </head>
    <body>

    <?php
        echo "<h1>Did charlie eat my lunch?</h1>";
        echo isBitten() ;   
        ?>
    </body>
</html>