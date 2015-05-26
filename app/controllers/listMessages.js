var managment_View = require('managment_View');
var managment_Data = require('managment_Data');
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
	Alloy.Globals.ActualContainer = $.viewSectionBonosBuyed;
	
	//Cambiar título de la cabecera
	var evtData = {
        title: L('text_6')
    };
    
	Ti.App.fireEvent('changeHeaderTitle', evtData);
	Alloy.Globals.ActualSection = 'listMessages';
	Ti.App.fireEvent('changeSection');
	
	
	if (Ti.Platform.osname == "android")
	{
		$.tableView_Bono.height = Alloy.CFG.HeightDevice - 120;
	}
	else
	{
		$.tableView_Bono.height = Alloy.CFG.HeightDeviceIphone - 120;
	}
	
	Ti.App.fireEvent('openLoading');
	Ti.App.addEventListener('loadDataMessages', loadMessages);
	managment_Data.LoadWebService_Messages(datamodel_Login.id);
	//loadMessages();
}



function loadMessages()
{
		Ti.App.removeEventListener('loadDataMessages', loadMessages);
		
		if (datamodel_messages.result === 'ok')
		{
			var rows = [];
			
			//Estilos
			var rowList = $.createStyle({classes: ['rowList']});
			var title = $.createStyle({classes: ['title']});
			var textDate = $.createStyle({classes: ['textDate']});
			var sytleLine = $.createStyle({classes: ['sytleLine']});
			var styleViewDate = $.createStyle({classes: ['styleViewDate']});
			var styleIcon = $.createStyle({classes: ['styleIcon']});
			
	
			datamodel_messages.data.forEach(function (element, index, array) {
				
				var containerTableRow = Ti.UI.createTableViewRow({});
				containerTableRow.applyProperties(rowList);
				
				var containerLabelTitle = Ti.UI.createLabel({
					text: element.mensaje
				});
				containerLabelTitle.applyProperties(title);	
				
				var containerDate = Ti.UI.createView({});
				containerDate.applyProperties(styleViewDate);
				
				var icon = Ti.UI.createImageView({
					image: '/images/iconText.png'
				});
				icon.applyProperties(styleIcon);
				
				var textDateCompra = Ti.UI.createLabel({
					text: moment(element.fecha_alta).format("dddd, D MMMM YYYY, h:mm")
				});
				textDateCompra.applyProperties(textDate);

				var line = Ti.UI.createView({});
				line.applyProperties(sytleLine);
				
				
				containerDate.add(icon);
				containerDate.add(textDateCompra);
				containerTableRow.add(containerDate);
				containerTableRow.add(containerLabelTitle);
				containerTableRow.add(line);
				rows.push(containerTableRow);
				
			});
			
			$.tableView_Bono.setData(rows);
		}
		else
		{
			managment_View.OpenInfoWindow( L('text_13'));
		}
	
	
		Ti.App.fireEvent('closeLoading');
	
}


/* ***********************************************************
 * Event handlers
 * ***********************************************************/




