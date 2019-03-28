<?php
@session_start();
include ($_SERVER['DOCUMENT_ROOT'] . "/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/profile/utils/functions_profile.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/framework/FW_PHP_OO_MVC_JQUERY/web2.0/utils/upload.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/framework/FW_PHP_OO_MVC_JQUERY/web2.0/utils/common.inc.php");


if ((isset($_GET["upload"])) && ($_GET["upload"] == true)){
  $result_prodpic = upload_files();
  $_SESSION['result_prodpic'] = $result_prodpic;
  echo json_encode($result_prodpic);
}


if ((isset($_GET["delete"])) && ($_GET["delete"] == true)){
  $_SESSION['result_prodpic'] = array();
  $result = remove_files();
  if($result === true){
    echo json_encode(array("res" => true));
  }else{
    echo json_encode(array("res" => false));
  }
  //echo json_decode($result);
}

//update general

if ((isset($_POST['update_profile_json']))) {

    update_profile();
}

//load avatar

if ((isset($_POST['load_avatar_json']))) {
  $_SESSION['loadavatar'] = json_decode($_POST['load_avatar_json'], true);

}


function update_profile(){

    $jsondata = array();
    $profileJSON = json_decode($_POST["update_profile_json"], true);
    $result= validate_profile($profileJSON);
    $avatar =  $_SESSION['loadavatar'];

    //encript password
    $opciones = [
      'cost' => 12,
    ];
    $pass= password_hash($result['data']['password'], PASSWORD_BCRYPT, $opciones);

    if(($result['condition']) && ($_SESSION) && ($_SESSION['user'] === $result['data']['user']) && ($_SESSION['email'] === $result['data']['email']) ) {
      $arrArgument = array(
        'user' => $result['data']['user'],
        'email' => $result['data']['email'],
        'password' => $pass,
        'country' => $result['data']['country'],
        'province' => $result['data']['province'],
        'city' => $result['data']['city'],
        'avatar' => $avatar
        
      );
      
      $arrValue = false;
      $path_model = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/profile/model/model/';
      $arrValue = loadModel($path_model, "profile_model", "update_profile", $arrArgument);
      echo json_encode ($arrValue);

    }else {
      echo json_encode ("Error, no estás en una session.");
    }
  }

  //load_values
  if (isset($_GET["load_values"]) && $_GET["load_values"] == true) {

    $arrArgument = array(
      'user' => $_SESSION['user'],
      'email' => $_SESSION['email']
    );

    $arrValue = false;
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/profile/model/model/';
    $arrValue = loadModel($path_model, "profile_model", "select_values", $arrArgument );
    echo json_encode($arrValue);
    

  }



//load shop 
if(  (isset($_GET["load_data_shop"])) && ($_GET["load_data_shop"] == true)  ){
  
  $arrArgument = array(
    'user' => $_SESSION['user']
  );

  $arrValue = false;
  $path_model = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/profile/model/model/';
  $arrValue = loadModel($path_model, "profile_model", "select_list_shop_user", $arrArgument );
  
  echo json_encode($arrValue);

}



  //load_country
if(  (isset($_GET["load_country"])) && ($_GET["load_country"] == true)  ){
  $json = array();

  $url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';
  $path_model=$_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/profile/model/model/';
  $json = loadModel($path_model, "profile_model", "obtain_countries", $url);

  if($json){
    echo $json;
    exit;
  }else{
    $json = "error";
    echo $json;
    exit;
  }
}

//load_provinces
if(  (isset($_GET["load_provinces"])) && ($_GET["load_provinces"] == true)  ){
  $jsondata = array();
  $json = array();

  $path_model=$_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/profile/model/model/';
  $json = loadModel($path_model, "profile_model", "obtain_provinces");

  if($json){
    $jsondata["provinces"] = $json;
    echo json_encode($jsondata);
    exit;
  }else{
    $jsondata["provinces"] = "error";
    echo json_encode($jsondata);
    exit;
  }
}

// load_cities
if(  isset($_POST['idPoblac']) ){
    $jsondata = array();
    $json = array();

  $path_model=$_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/profile/model/model/';
  $json = loadModel($path_model, "profile_model", "obtain_cities", $_POST['idPoblac']);

  if($json){
    $jsondata["cities"] = $json;
    echo json_encode($jsondata);
    exit;
  }else{
    $jsondata["cities"] = "error";
    echo json_encode($jsondata);
    exit;
  }
}


