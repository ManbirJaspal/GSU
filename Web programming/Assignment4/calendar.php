<?php
	date_default_timezone_set('America/New_York');
	echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"calendar.css\">";
	echo "<body>";
        echo "<div>";
		echo "<h1> Current Date and Time is: " .  date("l F j, Y, g:i a") . "</h1>";
		echo "<form action=\"" . $_SERVER['PHP_SELF']."\" method=\"post\" name=\"calendar_generator\">";
		echo "<p><h2>How many hours from now do you want to see? " . "<input name=\"hours\" type=\"number\" min=\"1\" max=\"24\" value=1>" . "</h2></p>";
		echo "<p><h2><input type=\"submit\" name=\"submit\" value=\"Submit\"></p></h2>";
	echo "</form>";
    echo "</div>";

    echo "<div class=\"tableContents\">";
		if(isset($_POST['submit'])) {
			$hours_display = $_POST['hours'];
			$time = date("h:00 A");
			$nameList = array('Manbir', 'Suganya', 'Abhishek');
			echo "<table id=\"displayHrs_table\">";
			for ($i=0; $i <= $hours_display; $i++) { 
				if ($i % 2 == 0) {
					echo "<tr class=\"evenRow container\">";
				}
				else{
					echo "<tr class=\"oddRow container\">";
				}
				echo "<th class=\"table_header\">" . get_hour_string($i) . "</th>";
				foreach ($nameList as $name) {
				 	echo "<td class=\"hr_td\">" . $name . "</td>";
				}
				echo "</tr>"; 
			}
			echo "</table>";
            echo "</div>";
		 }
	echo "</body>";
?>

<?php
	function get_hour_string($increment){
		$localTime = new DateTime($time);
		$localTime->modify('+' . $increment . ' hour');
		return $localTime->format("h:00 a");
	}
?>