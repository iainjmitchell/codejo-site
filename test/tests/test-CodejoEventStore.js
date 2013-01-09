(function($, undefined){
	module('CodejoEventStore - Integration Tests against ACL');

	// test('Notified of codejo events when codejo event store refreshed', function(){
	// 	var codejoEvents, 
	// 		notifyCodejoEvents = function(events){
	// 			codejoEvents = events;
	// 		},
	// 		target = new CodejoEventStore(notifyCodejoEvents);
	// 	target.refresh();
		
	// 	ok(codejoEvents.length > 0);
	// });
})(jQuery);

var CodejoEventStore = function(notifyCodejoEvents){
	function refresh(){
		notifyCodejoEvents([]);
		$.ajax('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%20%3D%20%22https%3A%2F%2Fwww.eventbrite.com%2Fjson%2Fuser_list_events%3Fapp_key%3DULMYPLOTPGRYKUTO2N%26user%3Dadmin@manchester-codejo.com%22&format=json',{
			jsonp: true,
			type: 'GET',
			success : function(rawData){
				console.log(rawData);
				var results = $.parseJSON(rawData);
				notifyCodejoEvents(results.query.results.json.events);	
			}
		});
	}

	return {
		refresh : refresh
	}
};	