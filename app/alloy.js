
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
Alloy.CFG.WHITE	 			= "#FFFFFF";
Alloy.CFG.BLACK	 			= "#000000";
Alloy.CFG.BLUE	 			= "#0284b2";
Alloy.CFG.BLUE2	 			= "#005f80";
Alloy.CFG.RED      			= "#e42626";
Alloy.CFG.GREEN      		= "#3abd0c";


//Altura y Anchura del Dispositivo
Alloy.CFG.WidthDeviceIphone   = Ti.Platform.displayCaps.platformWidth;
Alloy.CFG.WidthDeviceAndroid   = Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160);
Alloy.CFG.HeightDevice   = Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160);


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

var datamodel_Login = [];
var datamodel_LoginToken = [];
var datamodel_CloseSession = [];

var datamodel_messages = {
						    "code": "1",
						    "result": [
									       {
									            "id": 			"1",
									            "date": 		"26/04/2015",
									            "message": 		"Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear.",
									      
									        },
									        {
									            "id": 			"2",
									            "date": 		"27/04/2015",
									            "message": 		"Well, the way they make shows is, they make one show. That show's called a pilot. ",
									      
									        },
									        {
									            "id": 			"2",
									            "date": 		"27/04/2015",
									            "message": 		"Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when...  ",
									      
									        },
									        {
									            "id": 			"2",
									            "date": 		"27/04/2015",
									            "message": 		"Well, the way they make shows is, they make one show. That show's called a pilot. ",
									      
									        },
									        {
									            "id": 			"2",
									            "date": 		"27/04/2014",
									            "message": 		"Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better  ",
									      
									        },{
									            "id": 			"2",
									            "date": 		"27/03/2015",
									            "message": 		"Well, the way they make shows is, they make one show. That show's called a pilot. ",
									      
									        },
									        {
									            "id": 			"2",
									            "date": 		"25/04/2015",
									            "message": 		"Well, the way they make shows is, they make one show. That show's called a pilot. ",
									      
									        }


						       		  ]
						    };



