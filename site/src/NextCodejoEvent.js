(function($, module, undefined){
	module.NextCodejoEvent = function(context, eventDetails){
		var titleRegExpression = new RegExp("- (.*)$");

		function init(){
			context
				.find("#codejo-date")
					.text(getFormattedDateTime(eventDetails.dateTime))
					.end()
				.find("#codejo-theme")
					.text(getEventTheme(eventDetails.title));
		}

		function getEventTheme(title){
			var theme = title.match(titleRegExpression)[0].split("- ")[1];
			return theme;
		}

		function getFormattedDateTime(dateTime){
			var date = moment(dateTime.replace(" ", "T")),
				formattedDate = date.format("dddd Do MMM [(]HH:mm[)]");
			return formattedDate;
		}
		init();
	};
})(jQuery, window);