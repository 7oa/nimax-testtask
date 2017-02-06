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
}

?>