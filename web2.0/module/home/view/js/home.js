$(document).ready(function() {
    //var total_pages = 0;
    var track_click = 0;

    
    var data = {'page':track_click};
    var top_load_JSON = JSON.stringify(data);
    $.post("module/home/controller/controller_home.class.php",
    {pro_top_load_json:top_load_JSON}, 
    function(response){
        console.log(track_click);
        $("#results").append(response);
        track_click++;
    });
    
    //top pages
    $.post("module/home/controller/controller_home.class.php?load_total_pages=true",
    function(response){

        console.log(response);
        total_pages = response/3;	//break total records into pages
        console.log(total_pages);

        $(document).on('click','.load_more', function() {  //user clicks on button
            $(this).hide();
            $('.animation_image').show();
            //track_click ++;
            console.log(track_click);
            console.log(total_pages);
            if(track_click <= total_pages){ 
                var data = {'page':track_click};
                var top_load_JSON = JSON.stringify(data);

                //console.log(top_load_JSON);
                $.post("module/home/controller/controller_home.class.php",
                {pro_top_load_json:top_load_JSON}, 
                function(response2) {
                    var JSON_data = JSON.parse(response2);
                    console.log(JSON_data[0]['Percent']);

                    $(".load_more").show(); //bring back load more button
                    $("#results").append(response2); //append data received from server
                        
                    //scroll page to button element
                    //$("html, body").animate({scrollTop: $("#load_more_button").offset().top}, 500);
                        
                    //hide loading image
                    $('.animation_image').hide(); //hide loading image once data is received*/
            
                    track_click++; //user click increment on load button
                
                }).fail(function(xhr, ajaxOptions, thrownError) { 
                    alert(thrownError); //alert any HTTP error
                    $(".load_more").show(); //bring back load more button
                    $('.animation_image').hide(); //hide loading image once data is received
                });

                
                if(track_click >= total_pages-1){
                    //reached end of the page yet? disable load button
                    $(".load_more").attr("disabled", "disabled");
                }

            }
        });

    });

    //top projects





    //?????
    /*echo '<ul class="page_result">';
    while($row = mysqli_fetch_array($results)){
        echo '<li id="item_'.$row["id"].'"><span class="page_name">'.$row["id"].') '.$row["name"].'</span>
        <span class="page_message">'.$row["message"].'</span></li>';
    }
    echo '</ul>';
    
    
    
    

    
    
    */


    //view js->html
    var ElementDiv = document.createElement('div');
    ElementDiv.id = "data_home";
    ElementDiv.innerHTML =  "<div class='ajuste'>"
                                + "<div class='from_profile'>"
                                    + "<div id='results'></div>"
                                    + "<div align='center'>"
                                        + "<button class='load_more' id='load_more_button'>load More</button>"
                                        + "<div class='animation_image' style='display:none;'> Loading...</div>"
                                    + "</div>"
                                + "</div>"//end div form_profile
                            + "</div>";//end div ajuste
    document.getElementById("top_home_pro").appendChild(ElementDiv);
});