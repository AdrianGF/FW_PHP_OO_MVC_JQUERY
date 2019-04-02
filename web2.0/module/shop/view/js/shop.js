$(document).ready(function(){

    $.get('module/shop/controller/controller_shop.class.php?load_list=true',
    function (response){
        //console.log(response);
       
    })

    //console.log(list.idproject);
    var ElementDiv = document.createElement('div');
    ElementDiv.id = "list_pro";
    ElementDiv.innerHTML =  "<div class='ajuste'>"
                                + "<div id='results'></div>"
                                + "<div id='pagination'></div>"
                            + "</div>";//end div ajuste
    document.getElementById("list_products").appendChild(ElementDiv);



    $.get("module/shop/controller/controller_shop.class.php?num_pages=true", 
    function (data, status) {
        var json = JSON.parse(data);
        var pages = json.pages;
        console.log(pages);

        //$("#results").load("modules/products/controller/controller_products.class.php"); //load initial records
        $.get('module/shop/controller/controller_shop.class.php?load_list=true',
        function (response){
            //console.log(list.idproject);
            $("#results").append(response);
        })
        $("#pagination").bootpag({
            total: pages,
            page: 1,
            maxVisible: 3,
            next: 'next',
            prev: 'prev'
        }).on("page", function (e, num) {
            alert(num);
            e.preventDefault();
            //$("#results").load("module/shop/controller/controller_shop.class.php", {'page_num': num});
            $.post("module/shop/controller/controller_shop.class.php", {'page_num': num},
            function (response2){
                $("#results").append(response2);
                //console.log(response);
            })
        });
        
    }).fail(function (xhr) {
        console.log("error");
        /*if(xhr.status  === 404){
            $("#results").load("modules/products/controller/controller_products.class.php?view_error=false");
        }else{
            $("#results").load("modules/products/controller/controller_products.class.php?view_error=true");
        }*/

    });



    

});

