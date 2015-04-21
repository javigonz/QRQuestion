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
	
	Ti.App.fireEvent('closeLoading');
}


