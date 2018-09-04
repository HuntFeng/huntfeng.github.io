<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$title = $_POST['title'];
	$email = $_POST['email'];
	$message = $_POST['message'];


	$mailTo = "huntf@sfu.ca";
	$headers = "From: ".$email;
	$from = "Email: ".$email;
	$txt = "Message from: ".$name".\n\n".$message;
	
	mail($mailTo,$title,$txt,$headers);
	header("Location: index.php?mailsent");
}
