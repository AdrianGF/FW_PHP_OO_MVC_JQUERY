<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/';
define('SITE_ROOT', $path);
define('MODEL_PATH', SITE_ROOT . 'model/');

require(MODEL_PATH . "db.class.singleton.php");
require(SITE_ROOT . "module/home/model/DAO/home_dao.class.singleton.php");

class home_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = homeDAO::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function select_home_top_BLL($arrArgument){
      return $this->dao->select_home_top_DAO($this->db, $arrArgument);
    }

    public function select_pages_top_BLL($arrArgument){
        return $this->dao->select_pages_top_DAO($this->db, $arrArgument);
      }
    
   
}
