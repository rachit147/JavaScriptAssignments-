function Dom() {}
Dom.prototype.addListener = function addListener() {
	let apiCallerIds = ['submitButton', 'prev', 'next']
	var apiHandler = new ApiHandler();
	var eventListener = new EventListener();
	eventListener.attachEventListenerByIds(apiCallerIds, 'click', apiHandler.callYoutube);
	eventListener.attachListenerOnEnter('submitButton');
	eventListener.attachListenerOnResize(apiHandler.callYoutube)
}
let dom = new Dom();
dom.addListener();
let appResult;