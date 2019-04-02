<?php
class shopDAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

   

    public function list_all_pro_DAO($db, $arrArgument){
        $test = $arrArgument['test'];

        $sql = "SELECT ProName FROM projects";
        $eje = $db->ejecutar($sql);
        return $db->listar($eje);

        //return $test;
    }

    public function total_pro_DAO($db) {
        $sql = "SELECT COUNT(*) as total FROM projects";
        $resu = $db->ejecutar($sql);
        return $db->listar($resu);
    }

    

    

}