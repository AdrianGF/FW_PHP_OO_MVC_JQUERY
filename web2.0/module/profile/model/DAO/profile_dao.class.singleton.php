<?php
class profileDAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function update_profile_DAO($db, $arrArgument){
        $user = $arrArgument['user'];
        $email = $arrArgument['email'];
        $password = $arrArgument['password'];
        $country = $arrArgument['country'];
        $province = $arrArgument['province'];
        $city = $arrArgument['city'];
        $avatar = $arrArgument['avatar'];
        $link= "/framework/FW_PHP_OO_MVC_JQUERY/web2.0/media/$avatar"; 

        $sql = "UPDATE users SET `password` = '$password', country = '$country', province = '$province', city = '$city', avatar = '$link' WHERE user = '$user' AND email = '$email' ";

        return $db->ejecutar($sql);
  }

    public function select_values_DAO($db, $arrArgument){
        $user = $arrArgument['user'];
        $email = $arrArgument['email'];

        $sql = "SELECT user, email FROM users WHERE user = '$user' AND email = '$email' ";
        $eje = $db->ejecutar($sql);
        return $db->listar($eje);
    }

    public function select_list_shop_user_DAO($db, $arrArgument){
      $user = $arrArgument['user'];

      $sql = "SELECT user, idshop, proName, newD, `date` FROM shop WHERE user = '$user' ";
    
      $resu = $db->ejecutar($sql);
      return $db->listar($resu);
    }

    public function obtain_countries_DAO($url){
        $ch = curl_init();
        curl_setopt ($ch, CURLOPT_URL, $url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
        $file_contents = curl_exec($ch);

        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        $accepted_response = array(200, 301, 302);
        if(!in_array($httpcode, $accepted_response)){
          return FALSE;
        }else{
          return ($file_contents) ? $file_contents : FALSE;
        }
    }

    public function obtain_provinces_DAO(){
        $json = array();
        $tmp = array();

        $provincias = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/framework/FW_PHP_OO_MVC_JQUERY/web2.0/resources/provinciasypoblaciones.xml');
        $result = $provincias->xpath("/lista/provincia/nombre | /lista/provincia/@id");
        for ($i=0; $i<count($result); $i+=2) {
          $e=$i+1;
          $provincia=$result[$e];

          $tmp = array(
            'id' => (string) $result[$i], 'nombre' => (string) $provincia
          );
          array_push($json, $tmp);
        }
            return $json;

    }

    public function obtain_cities_DAO($arrArgument){
        $json = array();
        $tmp = array();

        $filter = (string)$arrArgument;
        $xml = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/framework/FW_PHP_OO_MVC_JQUERY/web2.0/resources/provinciasypoblaciones.xml');
        $result = $xml->xpath("/lista/provincia[@id='$filter']/localidades");

        for ($i=0; $i<count($result[0]); $i++) {
            $tmp = array(
              'poblacion' => (string) $result[0]->localidad[$i]
            );
            array_push($json, $tmp);
        }
        return $json;
    }

    

}