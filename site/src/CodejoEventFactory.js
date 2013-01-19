(function($, module, undefined){
	module.CodejoEventFactory = function(context, eventBriteEventTranslator){
		function create(events){
			if (events.length > 0){
				return new NextCodejoEvent(context, eventBriteEventTranslator.asCodejoEvent(events[0]));
			}
			return new NoCodejoEvent(context);
		}

		return {
			create : create
		};
	};
})(jQuery, window);