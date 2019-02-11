var ViewHandler = (function () {
	function ViewHandler() {}
	ViewHandler.prototype.displaySearchResult = async function displaySearchResult(start, end, pagination) {
		let htmlGenerator = new HtmlGenerator(),
			apiHandler = new ApiHandler(),
			result = appResult;
		items = result.items;
		videos = [];
		outputContent = document.getElementById('outputContent');
		outputContent.innerHTML = '';
		for (let i = start; i < end; i++) {
			let title = items[i].snippet.title;
			let thumbnails = items[i].snippet.thumbnails.medium.url;
			let description = items[i].snippet.description;
			let publishedAt = items[i].snippet.publishedAt.split('T')[0];


			let channelTitle = items[i].snippet.channelTitle;
			let videoId = items[i].id.videoId;
			videos.push(videoId);
			outputContent.appendChild(htmlGenerator.createCard(thumbnails, title, description, videoId, publishedAt, channelTitle));
		}
		this.changeButtonState(result);
		this.displayViews(await apiHandler.getViews(videos));
		if (pagination) {
			htmlGenerator.createPagination(result);
		}
	}
	ViewHandler.prototype.displayViews = function displayViews(result) {
		result.items.forEach(function (element) {
			document.getElementById(element.id + 'view').innerHTML = 'Views : ' + element.statistics.viewCount;
		});
	}
	ViewHandler.prototype.changeButtonState = function changeButtonState(result) {
		let prevPageToken = result.prevPageToken;
		let nextPageToken = result.nextPageToken;
		let next = document.getElementById('next');
		let prev = document.getElementById('prev');
		next.style = 'visibility:hidden';
		prev.style = 'visibility:hidden';
		if (prevPageToken && nextPageToken) {
			prev.style = 'visibility:block';
			prev.setAttribute('page-info', prevPageToken);
			next.style = 'visibility:block';
			next.setAttribute('page-info', nextPageToken);
		} else if (nextPageToken) {
			next.style = 'visibility:block';
			next.setAttribute('page-info', nextPageToken);
		} else if (prevPageToken) {
			prev.style = 'visibility:block';
			prev.setAttribute('page-info', prevPageToken);
		}
	}
	return ViewHandler;
})();