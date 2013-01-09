(function($, module, undefined){
	module.NextCodejoEvent = function(context, eventDetails){
		console.log(context
			.find("#codejo-date"));
		context
			.find("#codejo-date")
				.text("Tuesday 22nd Jan (18:00)");
	};
})(jQuery, window);