(function($, undefined){
	module("Codejo Event Factory");
	test("When no events, Then factory returns no codejo event", function(){
		var noEvents = new EventsBuilder().build(),
			codejoEvent = new CodejoEventFactory($(".codejo-details")).create(noEvents);
		ok(codejoEvent instanceof NoCodejoEvent);
	});

	test("When one event, Then factory returns next codejo event", function(){
		var oneEvent = new EventsBuilder().withEvent(new EventBuilder()).build(),
			codejoEvent = new CodejoEventFactory($(".codejo-details")).create(oneEvent);
		ok(codejoEvent instanceof NextCodejoEvent);
	});

	test("When multiple events, Then factory returns next codejo event", function(){
		var multipleEvents = 
				new EventsBuilder()
					.withEvent(new EventBuilder())
					.withEvent(new EventBuilder())
					.withEvent(new EventBuilder())
					.withEvent(new EventBuilder())
					.build(),
			codejoEvent = new CodejoEventFactory($(".codejo-details")).create(multipleEvents);
		ok(codejoEvent instanceof NextCodejoEvent);
	});

	var EventsBuilder = function(){
		var eventBuilders = [];

		function withEvent(eventBuilder){
			eventBuilders.push(eventBuilder);
			return this;
		}

		function build(){
			var count = 0,
				numberOfEvents = eventBuilders.length,
				events = [];
			for(count; count < numberOfEvents; count++){
				var eventDetails = 	eventBuilders[count].build();
				events.push(eventBuilders[count].build())
			}
			return events;
		}

		return {
			withEvent : withEvent,
			build : build
		}
	};

	var EventBuilder = function(){
		return {
			build : function(){
				return {};
			}
		}
	};
})(jQuery);



var CodejoEventFactory = function(context){
	function create(events){
		if (events.length > 0){
			return new NextCodejoEvent(context, {
				title: "A codejo - A theme",
				dateTime: "2000-01-01 01:00:00"
			});
		}
		return new NoCodejoEvent(context);
	}

	return {
		create : create
	}
};