(function($, undefined){
	module("Next Codejo Event");
	var defaultTitle = "A codejo - A theme",
		defaultDateTime = "2000-01-01 01:00:00";

	test("Codejo date displayed", function(){
		var context = $(".codejo-details");
		new NextCodejoEvent(context, {
			dateTime: "2013-01-22 18:30:00",
			title: defaultTitle
		});
		equal(context.find("#codejo-date").text(), "Tuesday 22nd Jan (18:30)");
	});

	test("Another Codejo date displayed", function(){
		var context = $(".codejo-details");
		new NextCodejoEvent(context, {
			dateTime: "2013-02-16 10:30:00",
			title: defaultTitle 
		});
		equal(context.find("#codejo-date").text(), "Saturday 16th Feb (10:30)");
	});

	test("Codejo theme is deduced from after hypen in title", function(){
		var theme = "A theme",
			title = "A CodeJo - " + theme,
			context = $(".codejo-details");
		new NextCodejoEvent(context, {
			dateTime: "2013-02-16 10:30:00",
			title : title
		});
		equal(context.find("#codejo-theme").text(), theme);
	});

	test("Another codejo theme is deduced from after hypen in title", function(){
		var theme = "Another theme",
			title = "A CodeJo - " + theme,
			context = $(".codejo-details");
		new NextCodejoEvent(context, {
			dateTime: "2013-02-16 10:30:00",
			title : title
		});
		equal(context.find("#codejo-theme").text(), theme);
	});
})(jQuery);