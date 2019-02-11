var EventListener = (function () {
	function EventListener() {}
	EventListener.prototype.attachEventListenerByIds = function attachEventListener(ids, event, func) {
		for (let i = 0; i < ids.length; i++) {
			document.getElementById(ids[i]).addEventListener(event, func);
		}
	}
	EventListener.prototype.attachListenerOnEnter = function attachListenerOnEnter(buttonId) {
		document.getElementById('searchTag').addEventListener('keyup', function (event) {
			if (event.keyCode === 13) {
				document.getElementById(buttonId).click();
			}
		});
	}
	EventListener.prototype.attachListenerOnResize = function attachListenerOnEnter(func) {
		window.addEventListener('resize', func);
	}
	return EventListener;
})();