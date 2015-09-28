<?php
	$to='mark@manngo.net';
	$from='mark@manngo.net';
	$subject='Test';
	$message='This is a test';
	$headers="From: $from";
	mail($to,$subject,$message,$headers);
