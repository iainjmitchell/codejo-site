(function($, undefined){
	module("Next Codejo Event");

	test("Codejo date displayed", function(){
		var context = $(".codejo-details");
		new NextCodejoEvent(context, {
			dateTime: "2013-01-22 18:30:00" 
		});
		equal(context.find("#codejo-date").text(), "Tuesday 22nd Jan (18:30)");
	});

	test("Another Codejo date displayed", function(){
		var context = $(".codejo-details");
		new NextCodejoEvent(context, {
			dateTime: "2013-02-16 10:30:00" 
		});
		equal(context.find("#codejo-date").text(), "Saturday 16th Feb (10:30)");
	});
})(jQuery);