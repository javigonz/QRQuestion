//Manejador de la carga de datos dinámicos (WebServices)

var managment_View = require('managment_View');


//SERVIDOR DE PRODUCCIÓN
var url_WebService_Login = "http://www.qrquestion.info/app/ws.php?c=user&m=login";
var url_WebService_Messsages = "http://www.qrquestion.info/app/ws.php?c=user&m=getMessages";



//************************************************************************************************************************
//Carga WEBSERVICE de Login en la app
//************************************************************************************************************************
exports.LoadWebService_Login = function(dataTelephone, dataEmail){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_Login = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadDataLogin');
	     		}
	     		catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	//client.setRequestHeader("Content-Type", "application/json; charset=utf-8");
 	

	var dataSend = {
			    		telefono: dataTelephone,
			    		email: dataEmail
			  	   };
			  	
 	client.open("POST", url_WebService_Login);
	client.send(dataSend);
	
};



//************************************************************************************************************************
//Carga WEBSERVICE para mostrar los mensajes recibidos
//************************************************************************************************************************
exports.LoadWebService_Messages = function(dataId){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_messages = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadDataMessages');
	     		}
	     		catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_13'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_13'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	
	var dataSend = {
			    		id: dataId
			  	   };
			  				  	  			  
 	
 	client.open("POST", url_WebService_Messsages);
	client.send(dataSend);
	
};

