(function($, module, undefined){
	module.NextCodejoEvent = function(context, eventDetails){
		function init(){
			context
				.find("#codejo-date")
					.text(getFormattedDateTime(eventDetails.dateTime));
		}

		function getFormattedDateTime(dateTime){
			var date = moment(dateTime.replace(" ", "T")),
				formattedDate = date.format("dddd Do MMM [(]HH:mm[)]");
			return formattedDate;
		}
		init();
	};
})(jQuery, window);