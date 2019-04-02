<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/';
define('SITE_ROOT', $path);
require(SITE_ROOT . "module/home/model/BLL/home_bll.class.singleton.php");

class home_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = home_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function select_home_top($arrArgument) {
        return $this->bll->select_home_top_BLL($arrArgument);
    }

    public function select_pages_top($arrArgument) {
        return $this->bll->select_pages_top_BLL($arrArgument);
    }
    
    

}
