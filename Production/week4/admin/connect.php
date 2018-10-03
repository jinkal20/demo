<?php
    $user = "root";
    $pass = "root";
    $host = "localhost";
    $db = "courseinfo";
    
    $conn = mysqli_connect($host,$user,$pass,$db);
    if(!$conn){
        echo 'Error';
        exit;
    }
    echo 'Connected';

    // 
    $myQuery = "select * from courseinfo";
    $result = myaqli_connect($conn, $myQuery);
    $rows = array();

    while ($row = mysqli_fetch_assoc($result)){
        $row[] = $row;
    }
    echo json_encode($rows);
?>