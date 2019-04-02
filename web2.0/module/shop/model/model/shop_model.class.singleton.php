<?php
//echo json_encode("products model class");
//exit;
$path = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/';
define('SITE_ROOT', $path);
require(SITE_ROOT . "module/shop/model/BLL/shop_bll.class.singleton.php");

class shop_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = shop_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    
    public function list_all_pro($arrArgument) {
        return $this->bll->list_all_pro_BLL($arrArgument);
    }

    public function total_pro() {
        return $this->bll->total_pro_BLL();
    }


}
