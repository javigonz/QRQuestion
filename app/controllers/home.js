var managment_View = require('managment_View');
var utils = require('utils');
var moment = require('moment');

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){
	
	//Añado el container actual al objeto de navegación
	Alloy.Globals.ActualContainer = $.viewHome;
	
	//Cambiar título de la cabecera
	var evtData = {
        title: L('text_5')
    };
	Ti.App.fireEvent('changeHeaderTitle', evtData);
	Alloy.Globals.ActualSection = 'home';
	Ti.App.fireEvent('changeSection');
	
	//Inicio de las notificaciones Push
	var managment_Push = require('managment_Push');
	
 	$.datePush.text = datamodel_message.get("title");
 	$.descriptionPush.value = datamodel_message.get("description");
 		
	createEventsModel();
	
	Ti.App.fireEvent('closeLoading');
	
}


function createEventsModel(){
	
	datamodel_message.on("change", function(model){
 		$.datePush.text = model.get("title");
 		$.descriptionPush.value = model.get("description");
    }); 
}


