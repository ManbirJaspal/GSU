<html>
    <head>
        <link rel="stylesheet" type="text/css" href="part1.css">
        <meta http-equiv="Content-Type"
              content="text/html; charset=UTF-8">
        <title>Part1_PHP</title>
    </head>
    <body>
        <?php
        $fontfamily = $_POST['fontfamily'];
         $textarea = $_POST['textarea'];
        $textcolor = $_POST['textcolor'];
        ?>
         <p class="<?php echo $textcolor; ?> <?php echo $fontfamily; ?>"><?php echo "$textarea"?></p>
    </body>
</html>

