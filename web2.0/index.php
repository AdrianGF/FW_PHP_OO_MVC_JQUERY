<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/framework/FW_PHP_OO_MVC_JQUERY/web2.0/';
    include($path . "model/functions.php");

        if ((isset($_GET['page'])) && ($_GET['page']==="controller_pro")){
            include("view/inc/top_page_pro.php");
        }else{
            if ((isset($_GET['page'])) && ($_GET['page']==="controller_contact")){
                include("view/inc/top_page_contact.php");
            }else{
                if ((isset($_GET['view'])) && ($_GET['view']==="main_profile")){
                    include("view/inc/top_page_profile.html");
                }else{
                    if ((isset($_GET['view'])) && ($_GET['view']==="main_home")){
                        include("view/inc/top_page_home.html");
                    }else{
                        if ((isset($_GET['view'])) && ($_GET['view']==="main_shop")){
                            include("view/inc/top_page_shop.html");
                        }else{
                            include("view/inc/top_page.php");
                        }
                    }
                }
            }
        }
    

    
    if ((isset($_GET['page'])) && ($_GET['page']==="controller_pro") || ($_GET['page']==="controller_like") || ($_GET['page']==="controller_contact") || ($_GET['view']==="main_profile")){
		include("view/inc/banner2.php");
	}else{
		include("view/inc/banner.php");
	}

	session_start();
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    
    if(isset($_SESSION['user'])){
        if($_SESSION['type'] == "1"){
            //print_r($_SESSION);
            $menu = "view/inc/menu1.php"; //user
        }elseif($_SESSION['type'] == "0"){
            //print_r($_SESSION);
            $menu = "view/inc/menu0.php"; //admin
        }
    }else{
        $menu = "view/inc/menu.php"; //other
    }


    
?>
<div id="wrapper">		
    <header  id="header" class="alt">    	
    	<?php
    	    include("view/inc/header.php");
    	?>
    </header>  
	
    <nav id="menu">
    	<?php 
		    include($menu); 
		?>        
    </nav>
    <div id="">
        <?php 

            if (!isset($_GET['module'])){
                include("view/inc/pages.php");  
            } else if((isset($_GET['module'])) && (!isset($_GET['view']))){
                require_once("module/".$_GET['module']."/controller/controller_" .$_GET['module']. ".class.php");
            }
            
            if ( (isset($_GET['module'])) && (isset($_GET['view'])) ){
                require_once("module/".$_GET['module']."/view/".$_GET['view'].".html");
            }
        ?>        
        <br style="clear:both;" />
    </div>
    <div id="footer">   	   
	    <?php
	       include("view/inc/footer.php");
	    ?>        
    </div>
</div>
<?php
    if ((isset($_GET['view'])) && ($_GET['view']==="main_shop")){
        include("view/inc/bottom_page_shop.html");
    }else{
        include("view/inc/bottom_page.php");
    }
?>