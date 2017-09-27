
<html>
    <head>
        <meta http-equiv="Content-Type"
              content="text/html; charset=UTF-8">
        <title>inclassAdvanced</title>
    </head>
    <body>
        <?php
        $title = $_POST['title'];
        $forename = $_POST['forename'];
        $surname = $_POST['surname'];
        $address = $_POST['address'];
        $yob = $_POST['yob'];
        $currentYear = date('Y');
        $age = $currentYear - $yob;
        print '<p>Hello, ' . "$title $forename $surname" . ' of ' . "$address</p>";
        print '<p>You will be,' . "$age" . ' this year.</p>';
        ?>
    </body>
</html>
