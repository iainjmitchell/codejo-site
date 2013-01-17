(function($, module, undefined){
	module.NextCodejoEvent = function(context, eventDetails){
		var codejoDateTime = new CodejoDateTime(eventDetails.dateTime),
			codejoTheme = new CodejoTheme(eventDetails.title);

		function init(){
			context
				.find("#next-codejo")
					.show()
					.find("#codejo-date")
						.text(codejoDateTime.getFormatted())
						.end()
					.find("#codejo-theme")
						.text(codejoTheme.get(eventDetails.title))
						.end()
					.find("#register")
						.attr("href", eventDetails.registrationUrl)
						.end()
					.end()
				.find("#no-codejo-event")
					.hide();
		}
		init();
	};

	var CodejoDateTime = function(dateTime){
		var dateTimeFormat = "dddd Do MMM [(]HH:mm[)]";

		function getFormatted(){
			var date = moment(dateTime.replace(" ", "T")),
				formattedDate = date.format(dateTimeFormat);
			return formattedDate;
		}

		return {
			getFormatted : getFormatted
		}
	};

	var CodejoTheme = function(title){
		var titleRegExpression = new RegExp("- (.*)$");

		function get(){
			var theme = title.match(titleRegExpression)[0].split("- ")[1];
			return theme;
		}

		return {
			get : get
		}
	};


})(jQuery, window);