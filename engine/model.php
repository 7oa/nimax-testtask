<?

Class Model {
    private $db;

    function __construct() {
        $options = require_once('config/db.php');
        $this->db = new SafeMySQL($options);
    }

    function getProducts() {
        return $this->db->getAll("SELECT * FROM products");
    }

    function getDiscounts() {
        return $this->db->getAll("SELECT percent, sum FROM discounts");
    }

	function getSession() {
		$Cookie = new Cookie();
		$Cookie->setTime('+20years');

		$Cookie->setName('session');
		return $Cookie->get();
	}

    function getCart() {
        $Cookie = new Cookie();
        $Cookie->setTime('+20years');

        $Cookie->setName('session');

        if (!$Cookie->get()) {
            $Cookie->setValue(session_id());
            $Cookie->create();

            return [];
        } else {
            return $this->db->getAll("SELECT product_id, count FROM cart WHERE session = ?s", $Cookie->get());
        }
    }

    function addCart($productId) {
    	$this->db->query("INSERT INTO cart (product_id, count, session) VALUE (?i, ?i, ?s)", $productId, 1, $this->getSession());
    }

    function editCart($productId, $count) {
    	$this->db->query("UPDATE cart SET count = ?i WHERE product_id = ?i AND session = ?s", $count, $productId, $this->getSession());
    }

    function deleteCart($productId) {
    	$this->db->query("DELETE FROM cart WHERE product_id = ?i AND session = ?s", $productId, $this->getSession());
    }
}

?>