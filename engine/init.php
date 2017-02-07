<?

require_once('template.php');
require_once('model.php');
require_once('cookie.php');

$Model = new Model();

if ($_GET['do'] == "api") {
	switch ($_GET['name']) {
		case 'add':
			if (is_numeric($_GET['product_id'])) {
				$Model->addCart($_GET['product_id']);
			}
			break;
		case 'edit':
			if (is_numeric($_GET['product_id']) && is_numeric($_GET['count']) && $_GET['count'] > 0) {
				$Model->editCart($_GET['product_id'], $_GET['count']);
			}
			break;
		case 'delete':
			if (is_numeric($_GET['product_id'])) {
				$Model->deleteCart($_GET['product_id']);
			}
			break;
	}
} else {
	$Template = new Template('index.twig');
	$Template->addData('products', $Model->getProducts());
	$Template->addData('cart', $Model->getCart());
	$Template->addData('discounts', $Model->getDiscounts());

	echo $Template->render();
}

?>