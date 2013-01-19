(function($, undefined){
	var fakeEventbriteEventTranslator = {
		asCodejoEvent : function(){
			return {
					title: "A codejo - A theme",
					dateTime: "2000-01-01 01:00:00"
			};
		}
	}

	module("Codejo Event Factory");
	test("When no events, Then factory returns no codejo event", function(){
		var noEvents = new EventsBuilder().build(),
			codejoEvent = new CodejoEventFactory($(".codejo-details"), fakeEventbriteEventTranslator).create(noEvents);
		ok(codejoEvent instanceof NoCodejoEvent);
	});

	test("When one event, Then factory returns next codejo event", function(){
		var oneEvent = new EventsBuilder().withOneEvent().build(),
			codejoEvent = new CodejoEventFactory($(".codejo-details"), fakeEventbriteEventTranslator).create(oneEvent);
		ok(codejoEvent instanceof NextCodejoEvent);
	});

	test("When multiple events, Then factory returns next codejo event", function(){
		var multipleEvents = 
				new EventsBuilder()
					.withOneEvent()
					.withOneEvent()
					.withOneEvent()
					.withOneEvent()
					.build(),
			codejoEvent = new CodejoEventFactory($(".codejo-details"), fakeEventbriteEventTranslator	).create(multipleEvents);
		ok(codejoEvent instanceof NextCodejoEvent);
	});

	test("When one event, Then event converted by event adapter", function(){
		var eventConverted,
			events = new EventsBuilder().withOneEvent();
			mockEventbriteEventTranslator = function(){
				return {
					asCodejoEvent : function(eventDetails){
						eventConverted = eventDetails;
						return {
							title: "A codejo - A theme",
							dateTime: "2000-01-01 01:00:00"
						};
					}
				}
			},
			codejoEvent = new CodejoEventFactory($(".codejo-details"), mockEventbriteEventTranslator).create(events);
		equal(eventConverted, events[0]);
	});

	var EventsBuilder = function(){
		var eventBuilders = [],
			events = [];

		function withOneEvent(){
			events.push({});
			return this;
		}

		function build(){
			return events;
		}

		return {
			withOneEvent : withOneEvent,
			build : build
		};
	};
})(jQuery);