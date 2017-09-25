<!DOCTYPE html>
<html>
<head>
    <title>Part4</title>
    </head>
    <body>
    <table>
        <tbody>
            <?php
$rests = array("Chama Gaucha"=>"40.50", "Aviva by Kameel"=>"15.00", "Bone’s Restaurant"=>"65.00", "Umi Sushi Buckhead"=>"40.50", "Fandangles"=>"30.00", "Capital Grille"=>"60.50", "Canoe"=>"35.50", "One Flew South"=>"21.00", "Fox Bros. BBQ"=>"15.00", "South City Kitchen Midtown"=>"29.00");
            function orderedByPrice($rests1){
            echo "<h2>Ordered by Price</h2>";
		asort($rests1);
		displayTable($rests1);
            }
            
            function orderedByName($rests1){
             echo "<h2>Ordered by Name</h2>";
		      ksort($rests1);
		      Displaytable($rests1);
	}
            
     function displayTable($rests1){       
	   foreach ($rests1 as $restname => $avgcost) {
		      echo "<tr><td>" . $restname . ": Avg Cost: $" . $avgcost . "</td></tr>";
              echo "<br>";
	}
            }
            ?>

    </tbody>
        </table>
    </body>
</html>

<?php
echo "<h2>10 best Restaurants in Atlanta</h2>";
displayTable($rests);
orderedByPrice($rests);
orderedByName($rests);
?>