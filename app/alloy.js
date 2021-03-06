
Alloy.Globals.viewContainerPrincipal = [];
Alloy.Globals.WinInitContainer;
Alloy.Globals.ViewActive = [];
Alloy.Globals.ActualContainer;
Alloy.Globals.ActualSection;
Alloy.Globals.IsLoading;
Alloy.Globals.Header;
Alloy.Globals.Menu;
Alloy.Globals.CloseSession = 'false';


//Paleta de Colores
Alloy.CFG.GREY 	 			= "#878787";
Alloy.CFG.GREY_LIGHT		= "#d9d9d9";
Alloy.CFG.GREY_SUPERLIGHT	= "#e7e8ed";
Alloy.CFG.GREY_DARK     	= "#383838";
Alloy.CFG.WHITE	 			= "#FFFFFF";
Alloy.CFG.BLACK	 			= "#000000";
Alloy.CFG.BLUE	 			= "#0284b2";
Alloy.CFG.BLUE2	 			= "#005f80";
Alloy.CFG.RED      			= "#e42626";
Alloy.CFG.GREEN      		= "#1f7501";


//Altura y Anchura del Dispositivo
Alloy.CFG.WidthDeviceIphone   = Ti.Platform.displayCaps.platformWidth;
Alloy.CFG.WidthDeviceAndroid   = Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160);
Alloy.CFG.HeightDevice   = Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160);
Alloy.CFG.HeightDeviceIphone = Ti.Platform.displayCaps.platformHeight;


//Fuentes
if(Ti.Platform.osname =='android') {
	Alloy.CFG.ARIAL_NORMAL = 'Arial';
	Alloy.CFG.FONT_HELVETICA_NEUE_LT_LIGHT = 'HelveticaNeueLTStd-Lt';
	Alloy.CFG.FONT_HELVETICA_NEUE_LT_MED = 'HelveticaNeueLTStd-Md';
}
else{
	Alloy.CFG.ARIAL_NORMAL = 'ArialMT';
	Alloy.CFG.FONT_HELVETICA_NEUE_LT_LIGHT = 'HelveticaNeueLTStd-Lt';
	Alloy.CFG.FONT_HELVETICA_NEUE_LT_MED = 'HelveticaNeueLTStd-Md';
}



/////////////////////////////////////////////////////////////Modelo de Datos
    

var datamodel_message;
Alloy.Models.Message = Backbone.Model.extend({
    defaults: {
        title: '',
        date: '',
        description: ''
    },
    initialize: function(){
     
    } 
});
    
datamodel_message = new Alloy.Models.Message({ title: L('text_19'),  description: ''});	
	
	
var datamodel_Login = [];
var datamodel_LoginToken = [];
var datamodel_CloseSession = [];
var datamodel_messages = [];

/*var datamodel_messages = {
						    "result": "ok",
						    "data": [
									       {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear.",
									      
									        },
									         {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break",
									      
									        },
									         {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break, mine do. ",
									      
									        },
									         {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear.Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear...",
									      
									        },
									         {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear.",
									      
									        },
									         {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear.",
									      
									        },
									         {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear.",
									      
									        }, {
									            "id": 			"1",
									            "fecha_alta": "2014-06-23 21:17:50",
									            "mensaje": 		"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear.",
									      
									        }

									        
						       		  ]
						    };*/


