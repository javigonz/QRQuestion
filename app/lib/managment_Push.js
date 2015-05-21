var managment_View = require('managment_View');

	// set android-only options
	var androidOptions={
	    focusAppOnPush:false,
	    showAppOnTrayClick:true,
	    showTrayNotification:true,
	    showTrayNotificationsWhenFocused:false,
	    singleCallback:true
	};
	
	// set blackberry-only options
	var blackberryOptions={
	    appId : "4427-7h6l37627mrr0I3956a74om7643M17l7921",
	    ppgUrl : "http://cp4427.pushapi.eval.blackberry.com",
	    usePublicPpg : true,
	    launchApplicationOnPush : true
	};
	
	var onReceive=function(evt){
	   
	    if(Ti.Platform.osname =='android') {
		    var payload = JSON.parse(evt.payload); 
		    datamodel_message.set({title:payload.android.title});
		    datamodel_message.set({description:payload.android.alert});
		    console.log(payload);
	    }
	    else
	    {
	    	var payload = JSON.stringify(evt);
	    	var payload = JSON.parse(payload); 
		    datamodel_message.set({title:payload.title});
		    datamodel_message.set({description:payload.alert});
		    console.log(payload);
	    }
	    
	    //console.log('A push evt' + JSON.stringify(evt));
	   // console.log('A push Payload' + payload);
	   // console.log(payload);
	};
	
	
	var onLaunched=function(evt){
		
	   /* var payload = JSON.parse(evt.payload); 
	    datamodel_message.set({title:title});
	    datamodel_message.set({description:alert});*/
	};
	
	
	// set android-only event
	var onFocused=function(evt){
	    Ti.API.info('A push notification onFocused');
	};
	
	// load library
	var ACSP=require('acspush');
	
	if (Ti.Platform.osname == "iphone")
	{
		// or make it as guest
		var ACSPush=new ACSP.ACSPush();
	}
	else
	{
		// create instance with your own or the user's username and password
		var ACSPush=new ACSP.ACSPush('javigonz','123456');
	}
		
	Ti.API.info('registrar device al PUSH');
	
	// set the channel to subscribe to
	var channel= datamodel_Login.telefono;
	
	// register this device
	ACSPush.registerDevice(channel,onReceive,onLaunched,onFocused,androidOptions,blackberryOptions);
	
	// unregister this device
	//ACSPush.unsubscribeFromChannel(channel,token,onSuccess,onFail);