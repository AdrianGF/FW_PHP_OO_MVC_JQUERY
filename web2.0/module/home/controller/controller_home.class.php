<?php
@session_start();
include ($_SERVER['DOCUMENT_ROOT'] . "/framework/FW_PHP_OO_MVC_JQUERY/web2.0/utils/common.inc.php");



//top projects
if ((isset($_POST['pro_top_load_json']))) {

    load_top_pro();
}

function load_top_pro() {

    $dataJSON = json_decode($_POST["pro_top_load_json"], true);

    $arrArgument = array(
    'data' => $dataJSON
    );

    $arrValue = false;
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/home/model/model/';
    $arrValue = loadModel($path_model, "home_model", "select_home_top", $arrArgument );
    echo json_encode($arrValue);
    

}

//pages 
if (isset($_GET["load_total_pages"])  && ($_GET["load_total_pages"] == true)){

    $arrArgument = array(
        'data' => 'output'
        );

    $arrValue = false;
    $path_model = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/module/home/model/model/';
    $arrValue = loadModel($path_model, "home_model", "select_pages_top", $arrArgument );

    echo json_encode ($arrValue);
}