var HtmlGenerator = (function () {
	function HtmlGenerator() {}

	HtmlGenerator.prototype.createCard = function createCard(thumbnail, title, description, videoId, publishedAt, channelTitle) {
		let cardDiv = document.createElement('div'),
			imageTag = document.createElement('img');

		//create card div
		cardDiv.setAttribute('class', 'carddiv');
		//create thumbnail 
		imageTag.setAttribute('src', thumbnail);
		imageTag.setAttribute('class', 'imgS');
		//add image tag insode card div
		cardDiv.appendChild(imageTag);
		//create container div
		let containerDiv = createContainerDiv(title, description, videoId, publishedAt, channelTitle);

		cardDiv.appendChild(containerDiv); //add containerDiv  inside card div

		return cardDiv;
	}

	function createContainerDiv(title, description, videoId, publishedAt, channelTitle) {
		let containerDiv = document.createElement('div'),
			h4 = document.createElement('h4'),
			anchor = document.createElement('a'),
			bold = document.createElement('b'),
			para = document.createElement('p'),
			h3Video = createHeading(3, videoId, 'Published on : ' + publishedAt);
		h3Title = createHeading(3, channelTitle, channelTitle);
		h3Views = createHeading(3, videoId + 'view', 'Views :');

		containerDiv.setAttribute('class', 'container');
		containerDiv.appendChild(h4);
		anchor.setAttribute('href', 'https://www.youtube.com/watch?v=' + videoId);
		bold.innerHTML = title;
		h4.appendChild(anchor);
		anchor.appendChild(bold);
		para.innerHTML = description;
		containerDiv.appendChild(para);
		containerDiv.appendChild(h3Video);
		containerDiv.appendChild(h3Title);
		containerDiv.appendChild(h3Views);


		return containerDiv;
	}

	function createHeading(headingSize, id, innerHTML) {
		let heading = document.createElement('h' + headingSize);
		heading.setAttribute('id', id);
		heading.innerHTML = innerHTML;
		return heading;
	}

	HtmlGenerator.prototype.createPagination = function createPagination(appResult) {
		let viewHandler = new ViewHandler(),
			result = appResult,
			screen = Math.ceil(window.screen.width / 400);
		var onclickCaller = (pageNo) => {
			return function () {
				var x = document.getElementById('pagination').getElementsByTagName('button');
				//console.log(x);
				for (let i = 0; i < x.length; i++) {
					x[i].removeAttribute('disabled');
				};
				document.getElementById('pagi' + (pageNo + 1)).setAttribute('disabled', 'disabled');
				viewHandler.displaySearchResult(pageNo * screen, (pageNo * screen) + screen);
			}
		};
		document.getElementById('pagination').innerHTML = '';
		for (let i = 0; i < result.items.length / screen; i++) {
			let button = document.createElement('button');
			button.setAttribute('id', 'pagi' + (i + 1));
			button.innerHTML = i + 1;
			button.addEventListener('click', onclickCaller(i));
			if (!i) {
				button.setAttribute('disabled', 'disabled');
			}
			document.getElementById('pagination').appendChild(button);
		}

	}
	return HtmlGenerator;
})();