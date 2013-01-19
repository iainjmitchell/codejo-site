(function($, undefined){
	module("EventBrite Event Translator");

	test("EventBrite event Start_date added to result as dateTime", function(){
		var startDate = "a start date",
			eventBriteEvent = {
				start_date : startDate
			};
		var result = new EventBriteEventTranslator().asCodejoEvent(eventBriteEvent);
		equal(result.dateTime, startDate);
	});

	test("Another EventBrite event Start_date added to result as dateTime", function(){
		var startDate = "another start date",
			eventBriteEvent = {
				start_date : startDate
			};
		var result = new EventBriteEventTranslator().asCodejoEvent(eventBriteEvent);
		equal(result.dateTime, startDate);
	});

	test("EventBrite event title added to result as title", function(){
		var title = "a title",
			eventBriteEvent = {
				title : title
			};
		var result = new EventBriteEventTranslator().asCodejoEvent(eventBriteEvent);
		equal(result.title, title);
	});

	test("Another EventBrite event title added to result as title", function(){
		var title = "another title",
			eventBriteEvent = {
				title : title
			};
		var result = new EventBriteEventTranslator().asCodejoEvent(eventBriteEvent);
		equal(result.title, title);
	});

	test("EventBrite event url added to result as registrationUrl", function(){
		var url = "a url",
			eventBriteEvent = {
				url : url
			};
		var result = new EventBriteEventTranslator().asCodejoEvent(eventBriteEvent);
		equal(result.registrationUrl, url);
	});

	test("Another EventBrite event url added to result as registrationUrl", function(){
		var url = "another url",
			eventBriteEvent = {
				url : url
			};
		var result = new EventBriteEventTranslator().asCodejoEvent(eventBriteEvent);
		equal(result.registrationUrl, url);
	});

})(jQuery);