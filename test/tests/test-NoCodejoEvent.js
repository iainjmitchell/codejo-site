(function($, undefined){
	module("No Codejo Event");
	test("Next codejo event hidden", function(){
		var context = $(".codejo-details"),
			nextCodejoEvent = context.find("#next-codejo");
		new NoCodejoEvent(context);
		equal(nextCodejoEvent.is(":visible"), false);
	});

})(jQuery);

var NoCodejoEvent = function(context){
	context.find("#next-codejo").hide();
};