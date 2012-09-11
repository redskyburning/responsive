<?php

require_once 'lib/Twig/Autoloader.php';
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('tmp');
$twig = new Twig_Environment($loader);

$tmp = (isset($_GET['tmp'])) ? $_GET['tmp'].'.html' : 'base.html'; 

echo $twig->render($tmp, array('the' => 'variables', 'go' => 'here'));

?>