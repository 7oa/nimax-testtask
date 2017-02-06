<?

require_once('template.php');
require_once('model.php');
require_once('cookie.php');

$Model = new Model();

print_r($Model->getCart());

$Template = new Template('index.twig');
$Template->addData('products', $Model->getProducts());

echo $Template->render();

?>