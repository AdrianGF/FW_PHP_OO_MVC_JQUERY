<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/';
define('SITE_ROOT', $path);
define('MODEL_PATH', SITE_ROOT . 'model/');

require(MODEL_PATH . "db.class.singleton.php");
require(SITE_ROOT . "module/shop/model/DAO/shop_dao.class.singleton.php");

class shop_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = shopDAO::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function list_all_pro_BLL($arrArgument){
      return $this->dao->list_all_pro_DAO($this->db, $arrArgument);
    }

    public function total_pro_BLL() {
        return $this->dao->total_pro_DAO($this->db);
    }

}
