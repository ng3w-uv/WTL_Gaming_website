<?php
    session_start();
    $servername = "sql6.freemysqlhosting.net";
    $dbname = "sql6467698";
    $username = "sql6467698";
    $password = "883w66QmSt";


    //get post data
    function input_check($data)
    {
    	$data=trim($data);
    	$data=stripslashes($data);
    	$data=htmlspecialchars($data);
    	return $data;
    }

    if (($_POST["id"] ?? false) ) {
        $id = input_check($_POST["id"]);
        //insert
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // query
            $stmt = $conn->prepare("DELETE from facts where id=?");
            $res = $stmt->execute([$id]);


            if (res) {
                $_SESSION['success'] = "Record Deleted Successfully";
                header("location: admin.php");
                exit();
            }else {
                $_SESSION['error'] = "Error occured while deleting record";
                header("location: admin.php");
                exit();
            }
        } catch(PDOException $e) {
            $_SESSION['error'] =  $e->getMessage();
            header("location: admin.php");
            exit();
        }
    }
    $conn=null;
 ?>
