(function($, module, undefined){
	module.CodejoEventFactory = function(context, eventAdapter){
		function create(events){
			if (events.length > 0){
				return new NextCodejoEvent(context, eventAdapter.convert(events[0]));
			}
			return new NoCodejoEvent(context);
		}

		return {
			create : create
		};
	};
})(jQuery, window);