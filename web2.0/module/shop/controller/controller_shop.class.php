<?php
@session_start();
include ($_SERVER['DOCUMENT_ROOT'] . "/framework/FW_PHP_OO_MVC_JQUERY/web2.0/utils/common.inc.php");


if(  (isset($_GET["load_list"])) && ($_GET["load_list"] == true)  ){
  
    $arrArgument = array(
      'test' => "test"
    );
  
    $arrValue = false;
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/shop/model/model/';
    $arrValue = loadModel($path_model, "shop_model", "list_all_pro", $arrArgument );
    
    echo json_encode($arrValue);
  
}


if(  (isset($_GET["num_pages"])) && ($_GET["num_pages"] == true)  ){
    
    $item_per_page = 3;
  
    //change work error apache
    //set_error_handler('ErrorHandler');

    try {

        $arrValue = false;
        $path_model = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/shop/model/model/';
        $arrValue = loadModel($path_model, "shop_model", "total_pro" );
        $get_total_rows = $arrValue[0]["total"]; //total records
        $pages = ceil($get_total_rows / $item_per_page); //break total records into pages
    } catch (Exception $e) {
        showErrorPage(2, "ERROR - 503 BD", 'HTTP/1.0 503 Service Unavailable', 503);
    }

    //change to defualt work error apache
    //restore_error_handler();

    if ($get_total_rows) { 
        $jsondata["pages"] = $pages;
        echo json_encode($jsondata);
        exit;
    } else {
        showErrorPage(2, "ERROR - 404 NO DATA", 'HTTP/1.0 404 Not Found', 404);
    }
  
}



