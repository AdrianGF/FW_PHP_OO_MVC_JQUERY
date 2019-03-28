$(document).ready(function(){

    if (document.getElementById('profile_m1')) {

        $(document).on("click","#submit", function(){//Al pulsar submit del form -> validación
            //console.log("in");
    
            validate_profile();
        });


        function validate_profile(){//validación
            var result = true;
        
            var user = document.getElementById('user').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            var country = document.getElementById('country').value;
            var province = document.getElementById('province').value;
            var city = document.getElementById('city').value;
           
            //var string_regexp = /^[0-9a-zA-Z]+[\-'\s]?[0-9a-zA-Z ]+$/;
            var regexp_name = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_.-]*$/;
            var regexp_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            var regexp_pass = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_.-]*$/;

            //user
            $(".error").remove();
            if ($("#user").val() === "" || $("#user").val() === "Error en el usuario."){
              $("#user").focus().after("<span class='error'>Error en el usuario.</span>");
              return false;
            }else if(!regexp_name.test($("#user").val())){
              $("#user").focus().after("<span class='error'>Error en el usuario.</span>");
              return false;
            }

            //email
            $(".error").remove();
            if ($("#email").val() === "" || $("#email").val() === "Error en el email."){
              $("#email").focus().after("<span class='error'>Error en el email.</span>");
              return false;
            }else if(!regexp_email.test($("#email").val())){
              $("#email").focus().after("<span class='error'>Error en el email.</span>");
              return false;
            }

            //password
            $(".error").remove();
            if ($("#password").val() === "" || $("#password").val() === "Contraseña requerida."){
              $("#password").focus().after("<span class='error'>Contraseña requerida.</span>");
              return false;
            }else if(!regexp_pass.test($("#password").val())){
              $("#password").focus().after("<span class='error'>Tiene que tener una longitud de más de 5 caracteres.</span>");
              return false;
            }

            //country
            if ($("#country").val() === "" || $("#country").val() === "Select country" || $("#country").val() === null) {
                $("#country").focus().after("<span class='error'>Select one country</span>");
                return false;
            }
        
            //province
            if ($("#province").val() === "" || $("#province").val() === "Select province") {
                $("#province").focus().after("<span class='error'>Select one province</span>");
                return false;
            }
        
            //city
            if ($("#city").val() === "" || $("#city").val() === "Select city") {
                $("#city").focus().after("<span class='error'>Select one city</span>");
                return false;
            }


            if (province === null) {
                province = 'default_province';
            }else if (province.length === 0) {
                province = 'default_province';
            }else if (province === 'Select province') {
                return 'default_province';
            }
    
            if (city === null) {
                city = 'default_city';
            }else if (city.length === 0) {
                city = 'default_city';
            }else if (city === 'Select city') {
                return 'default_city';
            }
            
            var data = {"user": user, "email": email, "password": password, "country": country, "province": province, "city": city };
            //console.log(data);
            var data_profile_JSON = JSON.stringify(data);

            $.post('module/profile/controller/controller_profile.class.php', 
            {update_profile_json:data_profile_JSON},
            function (response){
                console.log(response);
                alert("done!");
            })

        }//End validate profile

        //auto values
        $.post("module/profile/controller/controller_profile.class.php?load_values=true",
        function(response){
            //console.log(response[0]['user']);
            var name = response[0]['user'];
            var correo = response[0]['email'];
            $("#user").val(name);
            $("#email").val(correo);
        
            
        }, "json");

        //DepDD---------------

        load_countries_v1();
    
        $("#province").empty();
        $("#province").append('<option value="" selected="selected">Select province</option>');
        $("#province").prop('disabled', true);
        $("#city").empty();
        $("#city").append('<option value="" selected="selected">Select city</option>');
        $("#city").prop('disabled', true);
       
        $(document).on('change','#country', function() {

            // $("#country").change(function() {
            
            // });

            var country = $(this).val();
            var province = $("#province");
            var city = $("#city");
            
    
            if(country !== 'ES'){
                province.prop('disabled', true);
                city.prop('disabled', true);
                $("#province").empty();
                $("#city").empty();
            }else{
                province.prop('disabled', false);
                city.prop('disabled', false);
                load_provinces_v1();
            }//fi else

        });
        

    
        $(document).on('change','#province', function() {

            var prov = $(this).val();
            if(prov > 0){
                load_cities_v1(prov);
            }else{
                $("#city").prop('disabled', false);
            }

        });


        //view-------
            var ElementDiv = document.createElement('div');
            ElementDiv.id = "data_profile";
            ElementDiv.innerHTML =  "<div class='ajuste'>"
                                        + "<div class='from_profile'>"
                                            + "<from method='post' name='ProfileForm' id='ProfileForm'>"
                                                + "<h1>Perfil:</h1>"
                                                + "<table>"
                                                    + "<tr>"
                                                        + "<td>Usuario:</td>"
                                                        + "<td><input name='user' id='user' type='text' placeholder='Usuario' style='background-color: lightgray;' readonly /></td>"
                                                    + "</tr>"
                                                    + "<tr>"
                                                        + "<td>Correo:</td>"
                                                        + "<td><input name='email' id='email' type='text' placeholder='Correo'  style='background-color: lightgray;' readonly /></td>"
                                                    + "</tr>"
                                                    + "<tr>"
                                                        + "<td>Password:</td>"
                                                        + "<td><input name='password' id='password' type='password' placeholder='Contraseña'/></td>"
                                                    + "</tr>"
                                                    + "<tr>"
                                                        + "<td>Country: </td>"
                                                        + "<td id='error_country'>"
                                                            + "<select name='country' id='country'>"
                                                                + "<option selected>Select country</option>"
                                                            + "</select>"
                                                            + "<div ></div>"
                                                        + "</td>"
                                                    + "</tr>"

                                                    + "<tr>"
                                                        + "<td>Province: </td>"
                                                        + "<td id='error_province'>"
                                                            + "<select name='province' id='province'>"
                                                                + "<option selected>Select province</option>"
                                                            + "</select>"
                                                            + "<div ></div>"
                                                        + "</td>"
                                                    + "</tr>"

                                                    + "<tr>"
                                                        + "<td>City: </td>"
                                                        + "<td id='error_city'>"
                                                            + "<select name='city' id='city'>"
                                                                + "<option selected>Select city</option>"
                                                            + "</select>"
                                                            + "<div ></div>"
                                                        + "</td>"
                                                    + "</tr>"

                                                    + "<tr>"
                                                        + "<td></td>"
                                                        + "<td>"
                                                            + "<div class='form-group' id='progress'>"
                                                                + "<div id='bar'></div>"
                                                                + "<div id='percent'>0%</div>"
                                                            + "<div>"
                                                            + "<div class='msg'></div>"
                                                            + "</br>"
                                                            +"<div id='dropzone' class='dropzone'></div>"
                                                        + "</td>"
                                                    + "</tr>"
                                                    + "<tr>"
                                                        + "<td><input id='submit' name='submit' type='submit' value='Update!'/></td>"
                                                    + "</tr>"
                                                + "</table>"//end table
                                            + "</form>"//end form
                                        + "</div>"//end div form_profile
                                    + "</div>";//end div ajuste
            document.getElementById("profile_test").appendChild(ElementDiv);



    }//end


    if (document.getElementById('profile_m2')) {

        //console.log(list.idproject);
        var ElementDiv = document.createElement('div');
        ElementDiv.id = "data_likes";
        ElementDiv.innerHTML =  "<div class='ajuste'>"
                                    + "<div class='list_likes'>"
                                            + "<h1>Likes list:</h1>"
                                            + "<table>"
                                                
                                            + "</table>"//end table
                                    + "</div>"//end div form_profile
                                + "</div>";//end div ajuste
        document.getElementById("likes").appendChild(ElementDiv);

    }//end

    


    if (document.getElementById('profile_m3')) {

        $("#pdfExport").on('click', () => {
            this.refs.history.exportData('pdf');
        });

        var source =
        {
            dataType: "json",
            dataFields: [
                { name: 'user', type: 'string' },
                { name: 'idshop', type: 'string' },
                { name: 'proName', type: 'string' },
                { name: 'newD', type: 'string' },
                { name: 'date', type: 'string' }
            ],
            id: 'id',
            url: "module/profile/controller/controller_profile.class.php?load_data_shop=true"
        };
        

        var dataAdapter = new $.jqx.dataAdapter(source);
        //console.log(source);

        $('#history').jqxDataTable(
        {
            width: $("history").width("100%"),
    
            pageable: true,
            pagerButtonsCount: 10,
            source: dataAdapter,
            sortable: true,
            pageable: true,
            altRows: true,
            filterable: true,
            columnsResize: true,
            pagerMode: 'advanced',
            columns: [
              { text: 'Nombre', dataField: 'user'},
              { text: 'NumCompra', dataField: 'idshop' },
              { text: 'NombreProyecto', dataField: 'proName' },
              { text: 'Donacion', dataField: 'newD' },
              { text: 'Fecha', dataField: 'date' }
          ]
          
        }); 




 
        /*$.get( "module/profile/controller/controller_profile.class.php?load_data_shop=true",
            function( response ) {
                console.log(response);


 

        })*/

    }//end


    //Dropzone function -----
    new Dropzone("#dropzone", { 
        url: "module/profile/controller/controller_profile.class.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "An error has occurred on the server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
        init: function () {
            this.on("success", function (file, response) {
                alert(response);
                $("#progress").show();
                $("#percent").show();
                $("#bar").width('100%');
                $("#percent").html('100%');
                $('.msg').text('').removeClass('msg_error');
                $('.msg').text('Success Upload image!!').addClass('msg_ok').animate({'right': '300px'}, 300);
                //console.log(file.name);
                //console.log("Response: "+response);
            });
        },
        complete: function (file) {
            if(file.status == "success"){
                alert("El archivo se ha subido correctamente: " + file.name);
                //console.log(file.name);
                var avatar = file.name; 
                //var data = { avatar };
                var avatar_name_JSON = JSON.stringify(avatar);

                $.post( "module/profile/controller/controller_profile.class.php",
                {load_avatar_json:avatar_name_JSON},
                function( response ) {
                //console.log(response);


 

                 })
            }
        },
        error: function (file) {
            alert("Error subiendo el archivo " + file.name);
        },
        removedfile: function (file, serverFileName) {
            var name = file.name;
            console.log(name);
            $.ajax({
                type: "POST",
                url: "module/profile/controller/controller_profile.class.php?delete=true",
                data: "filename=" + name,
                success: function (data) {
                    console.log(data);
                    $("#percent").hide();
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    $("#e_avatar").html("");
                    
                    var element2;
                    if ((element2 = file.previewElement) !== null) {
                        element2.parentNode.removeChild(file.previewElement);
                    } else {
                            return false;
                    }
                }
            });
        }

    });
    
    //$("div#dropzone").dropzone({
       
    //});//End dropzone

});//End Doc Rdy

function load_countries_v1() {
    $.get( "module/profile/controller/controller_profile.class.php?load_country=true",
        function( response ) {
            //console.log(response);
            if(response === 'error'){
                load_countries_v2("resources/ListOfCountryNamesByName.json");
            }else{
                load_countries_v2("module/profile/controller/controller_profile.class.php?load_country=true");
            }
    })
    .fail(function(response) {
        load_countries_v2("resources/ListOfCountryNamesByName.json");
    });
}

function load_countries_v2(cad) {
    $.getJSON( cad, function(data) {
      //console.log( data );
      $("#country").empty();
      $("#country").append('<option value="" selected="selected">Select country</option>');

      $.each(data, function (i, valor) {
        $("#country").append("<option value='" + valor.sISOCode + "'>" + valor.sName + "</option>");
      });
    })
    .fail(function() {
        alert( "error load_countries" );
    });
}

function load_provinces_v1() {
    
    $.get( "module/profile/controller/controller_profile.class.php?load_provinces=true",
        function( response ) {
          $("#province").empty();
	        $("#province").append('<option value="" selected="selected">Select province</option>');

            //alert(response);
        var json = JSON.parse(response);
		    var provinces=json.provinces;
		    //alert(provinces);
		    //console.log(provinces);

		    //alert(provinces[0].id);
		    //alert(provinces[0].nombre);

            if(provinces === 'error'){
                load_provinces_v2();
            }else{
                for (var i = 0; i < provinces.length; i++) {
        		    $("#province").append("<option value='" + provinces[i].id + "'>" + provinces[i].nombre + "</option>");
    		    }
            }
    })
    .fail(function(response) {
        load_provinces_v2();
    });
}

function load_provinces_v2() {
    $.get("resources/provinciasypoblaciones.xml", function (xml) {
	    $("#province").empty();
	    $("#province").append('<option value="" selected="selected">Select province</option>');

        $(xml).find("provincia").each(function () {
            var id = $(this).attr('id');
            var name = $(this).find('nombre').text();
            $("#province").append("<option value='" + id + "'>" + name + "</option>");
        });
    })
    .fail(function() {
        alert( "error load_provinces" );
    });
}

function load_cities_v1(prov) {
    var datos = { idPoblac : prov  };
	$.post("module/profile/controller/controller_profile.class.php", datos, function(response) {
        var json = JSON.parse(response);
		var cities=json.cities;
		//alert(poblaciones);
		//console.log(poblaciones);

		$("#city").empty();
	    $("#city").append('<option value="" selected="selected">Select city</option>');

        if(cities === 'error'){
            load_cities_v2(prov);
        }else{
            for (var i = 0; i < cities.length; i++) {
        		$("#city").append("<option value='" + cities[i].poblacion + "'>" + cities[i].poblacion + "</option>");
    		}
        }
	})
	.fail(function() {
        load_cities_v2(prov);
    });
}

function load_cities_v2(prov) {
    $.get("resources/provinciasypoblaciones.xml", function (xml) {
		$("#city").empty();
	    $("#city").append('<option value="" selected="selected">Select city</option>');

		$(xml).find('provincia[id=' + prov + ']').each(function(){
    		$(this).find('localidad').each(function(){
    			 $("#city").append("<option value='" + $(this).text() + "'>" + $(this).text() + "</option>");
    		});
        });
	})
	.fail(function() {
        alert( "error load_cities" );
    });
}