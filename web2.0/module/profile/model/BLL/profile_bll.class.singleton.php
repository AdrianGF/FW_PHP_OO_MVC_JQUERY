<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/';
define('SITE_ROOT', $path);
define('MODEL_PATH', SITE_ROOT . 'model/');

require(MODEL_PATH . "db.class.singleton.php");
require(SITE_ROOT . "module/profile/model/DAO/profile_dao.class.singleton.php");

class profile_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = profileDAO::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function update_profile_BLL($arrArgument){
      return $this->dao->update_profile_DAO($this->db, $arrArgument);
    }

    public function select_values_BLL($arrArgument){
      return $this->dao->select_values_DAO($this->db, $arrArgument);
    }

    public function select_list_shop_user_BLL($arrArgument){
      return $this->dao->select_list_shop_user_DAO($this->db, $arrArgument);
    }
    public function obtain_countries_BLL($url){
      return $this->dao->obtain_countries_DAO($url);
    }

    public function obtain_provinces_BLL(){
      return $this->dao->obtain_provinces_DAO();
    }

    public function obtain_cities_BLL($arrArgument){
      return $this->dao->obtain_cities_DAO($arrArgument);
    }
    
    /*
     public function create_product_BLL($arrArgument){
      return $this->dao->create_product_DAO($this->db, $arrArgument);
    }
    */
}
