var ApiHandler = (function () {
	function ApiHandler() {}

	ApiHandler.prototype.getViews = async function getViews(videoIds) {
		var url = `${Constants.URL.ApiCommonUrl}${Constants.URL.TypeVideos}?${Constants.URL.Key}&id=${videoIds.join(',')}&part=statistics`;
		var ajaxHandler = new AjaxHandler();
		var result = await ajaxHandler.ajaxRequest(url, 'GET').then(function (data) {
				return data;
			})
			.catch(function (error) {
				alert(error);
			});;

		return JSON.parse(result);
	}

	ApiHandler.prototype.callYoutube = async function callYoutubeAndDisplay(page) {
		let url = createUrl(page);
		if (url) {
			let viewHandler = new ViewHandler(),
				screen = Math.ceil(window.screen.width / 400),
				ajaxHandler = new AjaxHandler(),
				result;
			result = await ajaxHandler.ajaxRequest(url, 'GET').then(function (data) {
				return data;
			}).catch(function (error) {
				alert(error);
			});
			if (!result) {
				alert('no result found');
			}
			result = JSON.parse(result);
			appResult = result; // set result to gloabal variable appResult
			console.log(result);
			viewHandler.displaySearchResult(0, screen, true);
		}
	}


	function createUrl(page) {
		let searchBox = document.getElementById('searchTag');
		if (searchBox.value) {
			let url;
			url = `${Constants.URL.ApiCommonUrl}${Constants.URL.TypeSearch}?${Constants.URL.Key}&type=${Constants.URL.TypeVideo}&part=snippet&maxResults=${Constants.Result.MaxResult}&q=`;
			url = url + searchBox.value;
			if (page.target.id === 'next' && page.target.getAttribute('page-info') != 'undefined') {
				url = url + '&pageToken=' + page.target.getAttribute('page-info');
			} else if (page.target.id === 'prev') {
				url = url + '&pageToken=' + page.target.getAttribute('page-info');
			}
			return url;
		} else {
			alert('Please enter video name')
		}
	}

	return ApiHandler;
})();