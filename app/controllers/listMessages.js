var managment_View = require('managment_View');
var managment_Data = require('managment_Data');
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
	Alloy.Globals.ActualContainer = $.viewSectionBonosBuyed;
	
	//Cambiar título de la cabecera
	var evtData = {
        title: L('text_6')
    };
	Ti.App.fireEvent('changeHeaderTitle', evtData);
	Alloy.Globals.ActualSection = 'listMessages';
	Ti.App.fireEvent('changeSection');
	
	loadMessages();
	
	$.tableView_Bono.height = Alloy.CFG.HeightDevice - 120;
}



function loadMessages()
{
	
		var rows = [];
		
		//Estilos
		var rowList = $.createStyle({classes: ['rowList']});
		var title = $.createStyle({classes: ['title']});
		var subtitle = $.createStyle({classes: ['subtitle']});
		var styleContainerDate = $.createStyle({classes: ['styleContainerDate']});
		var textDate = $.createStyle({classes: ['textDate']});
		var sytleLine = $.createStyle({classes: ['sytleLine']});
		

		datamodel_messages.result.forEach(function (element, index, array) {
			
			var containerTableRow = Ti.UI.createTableViewRow({});
			containerTableRow.applyProperties(rowList);
			
			var containerLabelTitle = Ti.UI.createLabel({
				text: element.message
			});
			containerLabelTitle.applyProperties(title);	
			
			var textDateCompra = Ti.UI.createLabel({
				text: element.date
			});
			textDateCompra.applyProperties(textDate);
			
			
			var line = Ti.UI.createView({});
			line.applyProperties(sytleLine);
			
			
			containerTableRow.add(textDateCompra);
			containerTableRow.add(containerLabelTitle);
			containerTableRow.add(line);
			rows.push(containerTableRow);
			
		});
		
		$.tableView_Bono.setData(rows);
	
	
		Ti.App.fireEvent('closeLoading');
	
}





/* ***********************************************************
 * Event handlers
 * ***********************************************************/




