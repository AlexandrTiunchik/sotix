<?php
include("../res/x5engine.php");
$nameList = array("rc4","hgr","5v7","m2x","f64","n4j","s4e","zvu","dfd","stv");
$charList = array("M","V","R","6","G","5","L","Y","Z","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
