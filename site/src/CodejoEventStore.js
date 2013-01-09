(function(context){


context.CodejoEventStore = function(){
$.ajax('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%20%3D%20%22https%3A%2F%2Fwww.eventbrite.com%2Fjson%2Fuser_list_events%3Fapp_key%3DULMYPLOTPGRYKUTO2N%26user%3Dadmin@manchester-codejo.com%22&format=json',{
	jsonp: true,
	type: 'GET',
	success : function(rawData){
		var results = $.parseJSON(rawData);
		console.log(obj);	
	}
});
}

})(this);
