<?php
//set up mysql connection
mysql_connect("localhost", "root", "") or die(mysql_error());
//select database
mysql_select_db("db_elf") or die(mysql_error());
?>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />

    <!-- Bootstrap init -->
    <script src="../js/jquery-1.11.2.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="phonegap.js"></script>

    <!-- Styles init -->
    <link rel="stylesheet" href="../css/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="../css/bootstrap-theme.min.css" type="text/css"/>
    <link rel="stylesheet" href="../css/normalize.css" type="text/css"/>
    <link rel="stylesheet" href="../css/styles.css" type="text/css"/>



    <title>Electric Love Festival</title>

</head>

<body>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well">
                <h2 class="text-center">List of Members</h2>
                <hr width="70%">


                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th width="6%" align="left">Member ID</th>
                        <th width="7%" align="left">First Name</th>
                        <th width="7%" align="left">Last Name</th>
                        <th width="7%" align="center">Email</th>
                        <th width="7%" align="center">Gender</th>
                        <th width="7%" align="left">BirthDay</th>


                    </tr>
                    </thead>
                    <tbody>
                    <?php
							//select all records form tblmember table
		 					$query = 'SELECT * FROM artists';
		 					//execute the query using mysql_query
							$result = mysql_query($query);
							//then using while loop, it will display all the records inside the table
							while ($row = mysql_fetch_array($result)) {
								echo ' <tr> ';
                        echo ' <td> ';
                        echo $row['id'];
                        echo ' <td> ';
                        echo $row['name'];
                        echo ' <td> ';
                        echo $row['time'];
                        echo ' <td> ';
                        echo $row['day'];
                        echo ' <td> ';
                        }

                        ?>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>
</html>