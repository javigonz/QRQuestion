var managment_View = require('managment_View');
var managment_Data = require('managment_Data');

Alloy.Globals.Menu = $.viewFooter;

Ti.App.addEventListener('changeSection', function(e) {
	changeSection();
});



//Estilos
var buttonView = $.createStyle({classes: ['buttonView']});	
var buttonViewOver = $.createStyle({classes: ['buttonViewOver']});	
var labelMenu = $.createStyle({classes: ['labelMenu']});

var view1;
var view2;
var view3;

show();


/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/
function show(){
	
	if (Ti.Platform.osname == "iphone")
	{
		$.viewFooter.top = Ti.Platform.displayCaps.platformHeight - 50;
		
		var widthButton = Alloy.CFG.WidthDeviceIphone / 3;
	}
	else
	{
		$.viewFooter.top = (Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160)) - 75;
		
		var widthButton = Alloy.CFG.WidthDeviceAndroid / 3;
	}

	
	//Botón de menú para MENSAJE
	view1 = Ti.UI.createView({});
	view1.applyProperties(buttonViewOver);
	view1.width = widthButton;
	view1.addEventListener('click', eventHandlerSection1);
	
	var label1 = Ti.UI.createLabel({
				text: L('text_7')
	});
	label1.applyProperties(labelMenu);
	
	view1.add(label1);		
	$.viewFooter.add(view1);

	//Botón de menú para MENSAJES RECIBIDOS
	view2 = Ti.UI.createView({});
	view2.applyProperties(buttonView);
	view2.width = widthButton;
	view2.addEventListener('click', eventHandlerSection2);
	
	var label2 = Ti.UI.createLabel({
				text: L('text_8')
	});
	label2.applyProperties(labelMenu);
	
	view2.add(label2);		
	$.viewFooter.add(view2);
	
	//Botón de menú para SALIR
	view3 = Ti.UI.createView({});
	view3.applyProperties(buttonView);
	view3.width = widthButton;
	view3.addEventListener('click', eventHandlerSection3);
	
	var label3 = Ti.UI.createLabel({
				text: L('text_9')
	});
	label3.applyProperties(labelMenu);
	
	view3.add(label3);		
	$.viewFooter.add(view3);
	

}


function changeSection(e)
{
	view1.applyProperties(buttonView);
	view2.applyProperties(buttonView);
	view3.applyProperties(buttonView);
	
	switch (Alloy.Globals.ActualSection) 
	{
		case 'home': 							view1.applyProperties(buttonViewOver);
												break;
		case 'listMessages': 	   		    	view2.applyProperties(buttonViewOver);
												break;
							
		default:								view1.applyProperties(buttonViewOver);
												break;																		
	}
	
}






/* ***********************************************************
 * Event handlers
 * ***********************************************************/

function eventHandlerSection1(e)
{
	//e.source.removeEventListener('click', eventHandlerSection1);
	Ti.App.fireEvent('changeSection');
	managment_View.OpenSectionParam('home',[]);
}

function eventHandlerSection2(e)
{
	//e.source.removeEventListener('click', eventHandlerSection2);
	managment_View.OpenSectionParam('listMessages',[]);
}



function eventHandlerSection3(e)
{
	Alloy.Globals.CloseSession = 'true';
	Ti.App.fireEvent('openLoading');
	managment_View.OpenSectionParam('login',[]);
}
