<!DOCTYPE html>
<html>
<head>
    <link type="text/css" rel="stylesheet" href="part2.css">
    <title>CheckerBoard</title>
    </head>
    <body>
    <table>
        <tbody>
        <?php
            $cols = 8;
            $rows = 8;
        		for($tr = 1; $tr <= $rows; $tr++) {
					echo "<tr>";
						for($td = 1; $td <= $cols; $td++){
							$tcalc = $tr + $td;
							if($tcalc % 2 == 0) {
								echo '<td class = "black"></td>';
							}else {
								echo '<td class = "red"></td>';
							}
						}
				}
            ?>
        </tbody>
        </table>
    </body>
</html>




