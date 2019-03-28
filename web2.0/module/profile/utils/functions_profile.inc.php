<?php
function validate_profile($value){

    $error = array();
    $valid = true;

    if ($value != null && $value){

        if(!$value['user']){
            $error['user'] = "test1";
            $valid = false;
        }

        if(!$value['email']){
            $error['email'] = "test2";
            $valid = false;
        }

        if(!$value['password']){
            $error['password'] = "test3";
            $valid = false;
        }
      
    } else {
        $valid = false;
    };

    return $return = array('condition' => $valid, 'error' => $error, 'data' => $value );
}