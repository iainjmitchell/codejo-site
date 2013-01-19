(function($, undefined){
	module("No Codejo Event");
	test("After initialisation next codejo event hidden", function(){
		var context = $(".codejo-details"),
			nextCodejoEvent = context.find("#next-codejo");
		new NoCodejoEvent(context);
		equal(nextCodejoEvent.is(":visible"), false);
	});

	test("No codejo message is hidden, After initialisation no codejo message is displayed", function(){
		var context = $(".codejo-details"),
			noCodejoEventMessage = context.find("#no-codejo-event");
		noCodejoEventMessage.hide();
		new NoCodejoEvent(context);
		equal(noCodejoEventMessage.is(":visible"), true);
	});
})(jQuery);