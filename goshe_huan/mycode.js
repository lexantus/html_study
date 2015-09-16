function init() {
	var elem = document.getElementById('main');
	var content = elem.textContent;
	elem.innerHTML = content + "<p>HELEJLJE</p>" + content;
}

addEventListener('load', init);