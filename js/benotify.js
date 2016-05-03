(function () {
	var benotify = window.benotify || { version: '1.0.0' };
	var list = [];

	function renderHtml(template, model) {
		if(Array.isArray(template)) template = template.join('');
		if(model) {
			return Handlebars.compile(template)(model);
		} else {
			return template;
		}
	}

	function generateUUID() {
		var d = new Date().getTime();
		if(window.performance && typeof window.performance.now === "function") {
			d += performance.now(); //use high-precision timer if available
		}
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return(c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;
	}

	function removeElement(id, ms) {
		if(document.getElementById(id)) {
			// console.log('remove', id, ms);
			setTimeout(function () {
				var el = document.getElementById(id);
				el.classList.add('removing');
				setTimeout(function () {
					el.remove();
				}, 1400);
				// el.remove();
			}, (ms || 0))
		}
	}

	benotify.show = function (option) {
		var wrapper = 'benotify-wrapper';
		var selector = 'body > .' + wrapper;
		if(!document.querySelector(selector)) {
			var el = document.createElement('div');
			document.body.appendChild(el)
			el.classList.add(wrapper);
		}

		var element = document.querySelector(selector);
		var tmpl = [
			// '<div id={{_id}}>',
			'<div class="benotify-title">{{title}}<div>',
			'<div class="benotify-text">{{text}}</div>',
			// '</div>'
		];

		option._id = generateUUID();
		var html = renderHtml(tmpl, option);
		var elChild = document.createElement('div');
		elChild.setAttribute('id', option._id);
		elChild.innerHTML = renderHtml(tmpl, option);
		element.appendChild(elChild);
		list.push(option);

		document.getElementById(option._id).classList.add('active')

		if(benotify.debug) benotify._list = list;
		removeElement(option._id, (option.timeout || 3000));
	}

	window.benotify = benotify;
}())
