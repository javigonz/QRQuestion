var managment_View = require('managment_View');
var managment_Data = require('managment_Data');

var utils = require('utils');
var validate = require('hdjs.validate');
var validator = new validate.FormValidator();
var checking_enable = 'false';
var tokenFileTelefono;
var tokenFileMail;

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){
	
		//Comprobar si ya existe un Token de Login
	tokenFileTelefono = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'tokenFileTelefono.txt');
	tokenFileMail = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'tokenFileMail.txt');
	
	if (tokenFileTelefono.exists())
	{
		var tokenTelefono = tokenFileTelefono.read();
		var tokenMail = tokenFileMail.read();
		
		if (tokenTelefono.length > 1 && Alloy.Globals.CloseSession == 'false') //Existe un token guardado, entro directamente
		{
			$.loginTelephone.value = tokenTelefono.text;
			$.loginEmail.value = tokenMail.text;
			
			Ti.App.addEventListener('loadDataLogin', validateUser);
			managment_Data.LoadWebService_Login(tokenTelefono.text, tokenMail.text);
			
		}
		else
		{
			console.log('Token con longitud 0, voy a logarme');
			Alloy.Globals.CloseSession = 'false';
			//IR AL LOGIN NORMAL
		}
	}
	else
	{
		console.log('No existe el fichero de token y se crea');
	}
	
	Ti.App.fireEvent('closeLoading');
	
	//Añado el container actual al objeto de navegación
	Alloy.Globals.ActualContainer = $.viewLogin;
	Alloy.Globals.ActualSection = 'login';
		
}



function validateForm() {
	validator.run([
				{
					id: 'loginTelephone',
				    value: $.loginTelephone.value,
				    display: L('text_1'),    
				    rules: 'required'
				},
				
				{
					id: 'loginEmail',
				    value: $.loginEmail.value,
				    display: L('text_2'),    
				    rules: 'required|valid_email'
				}
				
				
			], validationCallback);	
};

var validationCallback = function(errors) {
	if(errors.length > 0) {
		for (var i = 0; i < errors.length; i++) {
			Ti.API.debug(errors[i].message);
		}
		//Muestra la pantalla de Info con los errores
		Ti.App.fireEvent('closeLoading');
		managment_View.OpenInfoWindow(errors[0].message);
		
		
	} 
	else 
	{
		Ti.App.fireEvent('openLoading');
		Ti.App.addEventListener('loadDataLogin', validateUser);
		managment_Data.LoadWebService_Login($.loginTelephone.value, $.loginEmail.value);
	}
};


function validateUser(){
	
	Ti.App.removeEventListener('loadDataLogin', validateUser);
	
	if (datamodel_Login.result === 'ok')
	{
		tokenFileTelefono.write(datamodel_Login.telefono);
		tokenFileMail.write(datamodel_Login.email);
		managment_View.OpenSectionParam('home',[]);
	}
	else
	{
		managment_View.OpenInfoWindow( L('text_20'));
		Ti.App.fireEvent('closeLoading');
	}
	
	
}




/* ***********************************************************
 * Event handlers
 * ***********************************************************/

function handler_login(e)
{
	validateForm();
	//managment_View.OpenSectionParam('home',[]);
}

function handler_Checkin(){
	
	if (checking_enable === 'false')
	{
		
		checking_enable = 'true';
		$.buttonChecking.backgroundImage = '/images/checkin_on.png';
		$.loginPass.passwordMask = 'false';
	}
	else
	{
		checking_enable = 'false';
		$.buttonChecking.backgroundImage = '/images/checkin_off.png';
		$.loginPass.passwordMask = 'true';
	}
}



