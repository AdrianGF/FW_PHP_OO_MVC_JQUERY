<?php
class homeDAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
 

    public function select_home_top_DAO($db, $arrArgument){
       
        $item_per_page = 3;
        $page_number = filter_var($arrArgument["data"]["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH);
        
        if(!is_numeric($page_number)){//error
            header('P/1HTT.1 500 Invalid page number!');
            exit();
        }
        
        $position = ($page_number * $item_per_page);

  
        $sql = "SELECT ROUND(((ProDonate * 100)/ProPrice),1)AS Percent, ProName, ProDesc ,ProPrice, Curr, Mail, idproject, ProDonate FROM projects ORDER BY ProDonate DESC LIMIT  $position, $item_per_page";
      
        $resu = $db->ejecutar($sql);
        return $db->listar($resu);      

        //return $arrArgument["data"]["page"];
      }

      public function select_pages_top_DAO($db, $arrArgument){

        $sql = "SELECT COUNT(*)AS result FROM projects";
        $resu = $db->ejecutar($sql);
        $resu2 =  $db->listar($resu);      
        $resu3 = intval($resu2[0]['result']);
        return $resu3;
      }
    

}