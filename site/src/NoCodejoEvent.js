
(function($, module, undefined){
	module.NoCodejoEvent = function(context){
		context
			.find("#next-codejo")
				.hide()
				.end()
			.find("#no-codejo-event")
				.show();
	};
})(jQuery, window);