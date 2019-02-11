var AjaxHandler = (function () {
	function AjaxHandler() {}

	AjaxHandler.prototype.ajaxRequest = function ajaxRequest(url, method) {
		return new Promise(function ajaxPromise(resolve, reject) {
			let httpRequest = new XMLHttpRequest();
			httpRequest.onload = function loadFunction() {
				if (this.readyState === 4) {
					if (this.status === 200) {
						resolve(this.response);
					} else {
						reject('Error in procesing request');
					}
				}
			}
			httpRequest.open(method, url, true);
			httpRequest.send();
		});
	}
	return AjaxHandler;
})();