var managment_View = require('managment_View');
var utils = require('utils');

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
	
	$.titlePush.text = datamodel_message.get("title");
 	$.datePush.text = datamodel_message.get("date");
 	$.descriptionPush.value = datamodel_message.get("description");
 		
	createEventsModel();
	
	Ti.App.fireEvent('closeLoading');
	
}


function createEventsModel(){
	
	datamodel_message.on("change", function(model){
 		$.titlePush.text = model.get("title");
 		$.datePush.text = model.get("date");
 		$.descriptionPush.value = model.get("description");
    }); 
}


