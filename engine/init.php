<?

require_once('template.php');
require_once('model.php');

$Model = new Model();

$Template = new Template('index.twig');
$Template->addData('products', $Model->getProducts());

echo $Template->render();

?>