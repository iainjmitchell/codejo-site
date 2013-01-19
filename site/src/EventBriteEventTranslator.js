
var EventBriteEventTranslator = function(){
	function asCodejoEvent(eventBriteEvent){
		return {
			dateTime : eventBriteEvent.start_date,
			title : eventBriteEvent.title,
			registrationUrl : eventBriteEvent.url
		};
	}

	return {
		asCodejoEvent : asCodejoEvent	
	}
};