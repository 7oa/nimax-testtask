<?
class Template {
    private $twig;
    private $filename;
    private $data;

    function __construct($filename) {
        $this->filename = $filename;

        $loader = new Twig_Loader_Filesystem(DIR.'/template');
        $this->twig = new Twig_Environment($loader);
	    $this->twig->addExtension(new Twig_Extension_Escaper());
    }

    function addData($name, $value) {
        $this->data[$name] = $value;
    }

    function render() {
        return $this->twig->render($this->filename, $this->data);
    }
}
?>