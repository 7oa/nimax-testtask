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

    function getCart() {
        $Cookie = new Cookie();
        $Cookie->setTime('+20years');

        $Cookie->setName('session');

        echo $Cookie->get();

        if (!$Cookie->get()) {
            $Cookie->setValue(session_id());
            $Cookie->create();

            return [];
        } else {
            return $this->db->getAll("SELECT * FROM cart WHERE session = ?s", $Cookie->get());
        }
    }
}

?>