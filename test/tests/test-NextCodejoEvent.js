(function($, undefined){
	module("Next Codejo Event");

	test("Codejo date displayed", function(){
		var context = $(".codejo-details");
		new NextCodejoEvent(context, {
			dateTime: "2013-01-22 18:30:00" 
		});
		equal(context.find("#codejo-date").val(), "Tuesday 22nd Jan (18:00)");
	});
})(jQuery);

var NextCodejoEvent = function(context, eventDetails){
	context
		.find("#codejo-date")
			.val("Tuesday 22nd Jan (18:00)");
};