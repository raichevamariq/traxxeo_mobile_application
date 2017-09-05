/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$.support.cors = true;
var storage = window.localStorage;

function hide_img(img){

img.src = "img/events/symbol_default.png";

}

///////////////
function loadObjectInfo(){

var event_id  = storage.getItem("event_id");
console.log("event_id is"+event_id);
 var cat_path ="img/veh_categories/"
 var default_event ="symbol_default.png";
 var event_path="img/events/"

    $.ajax({
	                        method:"get",
                             url:"http://prodmobile.traxxeo.com/servlet/showDetails?event_id="+event_id+"&userId="+storage.getItem("userId"),
                                    error:function(  jqXHR, textStatus,  errorThrown ){

                                    console.log(errorThrown);
                                    },
                        		}).done(function(response){

                        				 console.log("proba"+response);
                        				 var jsonData = JSON.parse(response);
                        				 $("#vehicle_info").append('<div class="row"><div class="col-xs-5 vehicle_info">Company name:</div><div class="col-xs-4 vehicle_spec">'+jsonData.company_name+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Container name:</div><div class="col-xs-4 vehicle_spec"></div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Is_container:</div><div class="col-xs-4 vehicle_spec">'+jsonData.is_container+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Object type:</div><div class="col-xs-4 vehicle_spec">'+jsonData.numberplate+'</div></div>'+
                        				 '<div class="row vehicle_info" style="margin-top:20px;margin-left:20px" >Comment:</div><div class="row vehicle_spec" style="margin-left:20px">'+jsonData.comment+'</div>');
                        				 //' <table class="table" style="margin:10px"><tr class="default font"><td>Color:</td><td>'+jsonData.color+'</td></tr><tr class="default font"><td>Chassis number:</td><td></td></tr>'+

                        				// '<tr class="default font"><td>Last badger:</td><td>'+jsonData.last_badger+'</td></tr></table><div style="margin:20px" class="default font">Comment:</div><div> '+jsonData.comment+'</div>');
                        				//appending the vehicle's card
                        				$("#vehicle_block").append( '<div  class=" card"  >'+
                                   '<div class="row"><div class="col-xs-3"><img width="50" height = "50" src="'+cat_path+storage.category_img+'.png" /></div><div class="col-xs-9">'+
                                       '<div class="vehicle"><div class="vehicle_name">'+jsonData.category_name+' '+jsonData.company_number+' '+jsonData.numberplate+'</div><div class="vehicle_spec"></div><div class="vehicle_address">'+jsonData.address+'</div></div></div></div>'+
                                           '<div class="vehicle_event" style="margin-top:10px;margin-left:10px;"><img class="'+storage.event_img+'" style="margin-right:10px" onerror="hide_img(this)" src = "'+event_path+storage.event_img+'.png" />'+jsonData.date+ " " + jsonData.poi+' </div></div>');

                        			}) .fail(function( jqXHR, textStatus ) {

                                         });

}
////////////////////////
function loadPersonInfo(){

var event_id  = storage.getItem("event_id");
console.log("event_id is"+event_id);
 var cat_path ="img/person_categories/"
 var default_event ="symbol_default.png";
 var event_path="img/events/"

    $.ajax({
	                        method:"get",
                             url:"http://prodmobile.traxxeo.com/servlet/showPersonDetails?event_id="+event_id+"&userId="+storage.getItem("userId"),
                                    error:function(  jqXHR, textStatus,  errorThrown ){

                                    console.log(errorThrown);
                                    },
                        		}).done(function(response){

                        				 console.log("proba"+response);
                        				 var jsonData = JSON.parse(response);
                        				 $("#vehicle_info").append('<div class="row"><div class="col-xs-5 vehicle_info">Company name:</div><div class="col-xs-4 vehicle_spec">'+jsonData.company_name+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">NISS/LIMOSA:</div><div class="col-xs-4 vehicle_spec">'+jsonData.niss+'/'+jsonData.limosa+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Phone:</div><div class="col-xs-4 vehicle_spec">'+jsonData.phone+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Home address:</div><div class="col-xs-4 vehicle_spec">'+jsonData.home_address+'</div></div>'+
                        				 '<div class="row vehicle_info" style="margin-top:20px;margin-left:20px" >Comment:</div><div class="row vehicle_spec" style="margin-left:20px">'+jsonData.comment+'</div>');
                        				 //' <table class="table" style="margin:10px"><tr class="default font"><td>Color:</td><td>'+jsonData.color+'</td></tr><tr class="default font"><td>Chassis number:</td><td></td></tr>'+

                        				// '<tr class="default font"><td>Last badger:</td><td>'+jsonData.last_badger+'</td></tr></table><div style="margin:20px" class="default font">Comment:</div><div> '+jsonData.comment+'</div>');
                        				//appending the vehicle's card
                        				$("#vehicle_block").append( '<div  class=" card"  >'+
                                   '<div class="row"><div class="col-xs-3"><img width="50" height = "50" src="'+cat_path+storage.category_img+'.png" /></div><div class="col-xs-9">'+
                                       '<div class="vehicle"><div class="vehicle_name">'+jsonData.first_name+' '+jsonData.last_name+'</div><div class="vehicle_spec">'+jsonData.company_name+' '+jsonData.category_name+'</div><div class="vehicle_address">'+jsonData.address+'</div></div></div></div>'+
                                           '<div class="vehicle_event" style="margin-top:10px;margin-left:10px;"><img class="'+storage.event_img+'" style="margin-right:10px" onerror="hide_img(this)" src = "'+event_path+storage.event_img+'.png" />'+jsonData.date+ ' </div></div>');

                        			}) .fail(function( jqXHR, textStatus ) {

                                         });

}////////////////

function loadVehicleInfo(){

var event_id  = storage.getItem("event_id");
console.log("event_id is"+event_id);
 var cat_path ="img/veh_categories/"
 var default_event ="symbol_default.png";
 var event_path="img/events/"

    $.ajax({
	                        method:"get",
                             url:"http://prodmobile.traxxeo.com/servlet/showDetails?event_id="+event_id+"&userId="+storage.getItem("userId"),
                                    error:function(  jqXHR, textStatus,  errorThrown ){

                                    console.log(errorThrown);
                                    },
                        		}).done(function(response){

                        				 console.log("proba"+response);
                        				 var jsonData = JSON.parse(response);
                        				 $("#vehicle_info").append('<div class="row"><div class="col-xs-5 vehicle_info">Company name:</div><div class="col-xs-4 vehicle_spec">'+jsonData.company_name+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Color:</div><div class="col-xs-4 vehicle_spec">'+jsonData.color+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Chassis number:</div><div class="col-xs-4 vehicle_spec">'+jsonData.chassis_nr+'</div></div>'+
                        				 '<div class="row"><div class="col-xs-5 vehicle_info">Last badge:</div><div class="col-xs-4 vehicle_spec">'+jsonData.last_badger+'</div></div>'+
                        				 '<div class="row vehicle_info" style="margin-top:20px;margin-left:20px" >Comment:</div><div class="row vehicle_spec" style="margin-left:20px">'+jsonData.comment+'</div>');
                        				 //' <table class="table" style="margin:10px"><tr class="default font"><td>Color:</td><td>'+jsonData.color+'</td></tr><tr class="default font"><td>Chassis number:</td><td></td></tr>'+

                        				// '<tr class="default font"><td>Last badger:</td><td>'+jsonData.last_badger+'</td></tr></table><div style="margin:20px" class="default font">Comment:</div><div> '+jsonData.comment+'</div>');
                        				//appending the vehicle's card
                        				$("#vehicle_block").append( '<div  class=" card"  >'+
                                   '<div class="row"><div class="col-xs-3"><img width="50" height = "50" src="'+cat_path+storage.category_img+'.png" /></div><div class="col-xs-9">'+
                                       '<div class="vehicle"><div class="vehicle_name">'+jsonData.category_name+' '+jsonData.company_number+' '+jsonData.numberplate+'</div><div class="vehicle_spec">'+jsonData.brand+' '+jsonData.model+'</div><div class="vehicle_address">'+jsonData.address+'</div></div></div></div>'+
                                           '<div class="vehicle_event" style="margin-top:10px;margin-left:10px;"><img class="'+storage.event_img+'" style="margin-right:10px" onerror="hide_img(this)" src = "'+event_path+storage.event_img+'.png" />'+jsonData.date+ " " + jsonData.poi+' </div></div>');

                        			}) .fail(function( jqXHR, textStatus ) {

                                         });

}

function select_item (item){

  $(".selected").removeClass("selected");
                                               $("#btn-map").show();
                                               $("#btn-details").show();
                                              item.parent().parent().addClass("selected");
                                                storage.setItem("multiple_vehicles",0);
                                                //PERSON ONLY CHARACTHERISTICS
                                                if(item.attr("data-item")=="person"){

                                                storage.setItem("first_name", item.attr("data-first-name"));
                                                storage.setItem("last_name", item.attr("data-last-name"));
                                                 storage.setItem("person_spec",item.attr("data-name"));
                                                }
                                                 //VEHICLE ONLY CHARACTHERISTICS
                                                else {
                                                 storage.setItem("spec",item.attr("data-spec"));
                                                 storage.setItem("name",item.attr("data-name"));
                                                 storage.setItem("poi",item.attr("data-poi"));

                                                }
                                               storage.setItem("event_date",  item.attr("data-date"));
                                                storage.setItem("type",  item.attr("data-item"));
                                               storage.setItem("latitude",  item.attr("data-latitude"));
                                               storage.setItem("longitude",  item.attr("data-longitude"));
                                               storage.setItem("address", item.attr("data-address"));
                                               storage.setItem("map-address", item.attr("data-map-address"));
                                               storage.setItem("event_id",  item.attr("data-event-id"));
                                               storage.setItem("category_img",item.attr("data-category-img"));
                                               storage.setItem("event_img",item.attr("data-event-img"));

                                                var id =   item.attr('id');

                                                $("."+id).show();

}
function loadVehicles(searchValue){
     storage.setItem("event_id","");

     var all_items= new Array();
    var cat_path ="img/veh_categories/"
    var cat_person_path = "img/person_categories/"
    var event_path="img/events/";
    var vehicles;
    storage.removeItem("current_vehicles");
     var filter =JSON.parse(storage.getItem(storage.getItem("userId")));
   // alert(filter.person);
    var person = filter.person;
    var object = filter.object;
     var vehicle = filter.vehicle;
      var url = "http://prodmobile.traxxeo.com/servlet/searchVehicle?userId="+storage.getItem("userId")+"&searchValue="+searchValue.toUpperCase()+"&person="+person+"&vehicle="+vehicle+"&object="+object;
   // var url = "http://prodmobile.traxxeo.com/servlet/searchVehicle?userId="+storage.getItem("userId")+"&searchValue="+searchValue.toUpperCase()+"&person="+person+"&vehicle="+vehicle+"&object="+object;
    console.log("URL:"+url);
    $("#vehicle_list").html("");


        $.ajax({
	                        method:"get",
                            url:url,
                                    error:function(  jqXHR, textStatus,  errorThrown ){

                                    console.log(errorThrown);
                                    },
                        		}).done(function(response){
                                        vehicles = response;
                                        $("#loading").hide();
                                         $("#btn-details").show();
                                                        $("#btn-map").show();
                                        console.log("VEHICLES"+vehicles);
                                        storage.setItem("multiple_vehicles",1);
                        				 var jsonData = JSON.parse(response);
                        				 $("#vehicles").append('<div class="list-group" id="vehicle_list" ></div>');
                        				 console.log("JSONDATA length"+jsonData.length);

                        				 for(var i=0;i<jsonData.length;i++){

                        				// storage.event_img= jsonData[i].event_img;


                        				var name ;

                        		if(jsonData[i].type == "person"){
                                        name = jsonData[i].first_name+" "+jsonData[i].last_name;
                                            	$("#vehicle_list").append(' <div  class=" card"  >'+
                                                                    				'<div class="col-xs-3" ><img style="float:right" width="50" height = "50" src="'+cat_person_path+jsonData[i].category_img+'.png" /></div><div class="col-xs-9">'+
                                                                    				'<div class="vehicle" id="'+jsonData[i].id+'" data-first-name="'+jsonData[i].first_name+'" data-last-name="'+jsonData[i].last_name+'" data-item="'+jsonData[i].type+'" data-event-id="'+jsonData[i].event_id+'" data-date="'+jsonData[i].date+' " data-latitude="'+jsonData[i].latitude+
                                                                                                            				'" data-name = "'+ jsonData[i].company_name+' '+jsonData[i].category_name+
                                                                                                            				'" data-longitude = "'+jsonData[i].longitude+'" data-address="'+jsonData[i].address+'"  data-map-address="'+jsonData[i].map_address+'" data-category-img="'+jsonData[i].category_img+'" data-event-img="'+jsonData[i].event_img+
                                                                                                            				'"><div class="vehicle_name">'+jsonData[i].first_name+ " " +jsonData[i].last_name+ '</div><div class="vehicle_spec">'+jsonData[i].company_name+' '+jsonData[i].category_name+'</div><div class="vehicle_address">'+jsonData[i].address+'</div></div></div>'+
                                                                    				'<div style="margin-top:10px;margin-left:10px" class="vehicle_event"><img class="'+jsonData[i].event_img+'" style="margin-right:10px" onerror="hide_img(this)"  width="15" height="15" src = "'+event_path+jsonData[i].event_img+'.png" />'+jsonData[i].date+' </div></div>');

                        				}
                        				else{


                                        name = jsonData[i].name;
                        				$("#vehicle_list").append(' <div  class=" card"  >'+
                        				'<div class="col-xs-3" ><img style="float:right" width="50" height = "50" src="'+cat_path+jsonData[i].category_img+'.png" /></div><div class="col-xs-9">'+
                        				'<div class="vehicle" id="'+jsonData[i].id+'" data-map-address="'+jsonData[i].map_address+'" data-item="'+jsonData[i].type+'" data-event-id="'+jsonData[i].event_id+'" data-date="'+jsonData[i].date+' " data-latitude="'+jsonData[i].latitude+
                        				'" data-name = "'+ jsonData[i].name+'" data-poi="'+jsonData[i].poi_name+'" data-spec="'+jsonData[i].brand+' '+jsonData[i].model+
                        				'" data-longitude = "'+jsonData[i].longitude+'" data-address="'+jsonData[i].address+'" data-category-img="'+jsonData[i].category_img+'" data-event-img="'+jsonData[i].event_img+
                        				'"><div class="vehicle_name">'+jsonData[i].name+'</div><div class="vehicle_spec">'+jsonData[i].brand+' '+jsonData[i].model+'</div><div class="vehicle_address">'+jsonData[i].address+'</div></div></div>'+
                        				'<div style="margin-top:10px;margin-left:10px" class="vehicle_event"><img class="'+jsonData[i].event_img+'" style="margin-right:10px" onerror="hide_img(this)"  width="15" height="15" src = "'+event_path+jsonData[i].event_img+'.png" />'+jsonData[i].date+ " " + jsonData[i].poi_name+' </div></div>');
                                       }
                                          if (i==0){
                                                                                  select_item($(".vehicle"));

                                                                                }
                                        all_items.push({
                                                                				category_img: jsonData[i].category_img,
                                                                				name:name,
                                                                				type : jsonData[i].type,
                                                                				latitude:jsonData[i].latitude,
                                                                				longitude:jsonData[i].longitude});
                                                                				                                       }

                                        storage.setItem("current_vehicles",JSON.stringify(all_items));
                                       //	$("#vehicle_list").append(' <div id="'+jsonData[i].id+'" class="list-group-item" style="witdh:70%" ><div style="background-color:#b6caea"> <icon class="glyphicon glyphicon-align-justify\"></icon><span class="list-title">'+jsonData[i].name+'</span></div><div>'+jsonData[i].address+'</div><div style="display:none" class="'+jsonData[i].id+' buttons" style="margin-top:20px"><button  class="btn-success" data-event-id="'+jsonData[i].event_id+'">View details</button><button class="btn-danger" '+
                                                               				 // 'data-date="'+jsonData[i].date+' " data-latitude="'+jsonData[i].latitude+'" data-longitude = "'+jsonData[i].longitude+'" data-address="'+jsonData[i].address+'">View on map</button></div></div>');
                                                                   //  }
                                        $(".vehicle").on("click",function()
                                        {
                                        select_item($(this));
                                        });

                        				$("#vehicles").append("</div>");

                        			}) .fail(function( jqXHR, textStatus ) {

                                         });
                          //|


}
   //window.addEventListener('native.keyboardshow', keyboardShowHandler);

   // function keyboardShowHandler(e){
   //     alert('Keyboard height is: ' + e.keyboardHeight);
   // }
var app = {
    // Application Constructor


    initialize: function() {

        this.bindEvents();


        $(document).on("click","#submit",function () {

                        if(navigator.online == false){
                            console.log("BLABLABLA");
                           $.jAlert({
                                                                          'title': 'No internet connection',
                                                                          'content': 'Please establish an internet connection',
                                                                          'theme': 'blue',
                                                                          'size': 'md',
                                                                          'showAnimation': 'fadeInUp',
                                                                          'hideAnimation': 'fadeOutDown'
                                                                        });
                        }
                        else{



                		$.ajax({

                				method:"get",
                            	url:"http://prodmobile.traxxeo.com/servlet/loginServlet?username="+$("#username").val().trim()+"&password="+$("#password").val()
                    		}).done(function(response){

                    		    if(response == "Incorrect"){
                                            $.jAlert({
                                               'title': 'Invalid credentials',
                                               'content': 'Wrong username or password',
                                               'theme': 'blue',
                                               'size': 'md',
                                               'showAnimation': 'fadeInUp',
                                               'hideAnimation': 'fadeOutDown'
                                             });


                                                }

                				else{
                				     //if( storage.setItem("userId", )
                				    storage.setItem("userId", response);
                				    if(storage.getItem(response) === null ){
                                        var filter = {"person":1,
                                                       "vehicle":1,
                                                       "object":1};
                                    storage.setItem(response,JSON.stringify(filter));

                				    }
                				    window.location.href="splash_screen.html";
                				    }





                			}) .fail(function( jqXHR, textStatus ) {

                                 });

                    console.log("BITCH");
                    }
          });

    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log("FUCK");

       //
    // Update DOM on a Received Event
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();