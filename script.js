document.addEventListener("click", (e) => {
	const el = e.target;
	const a = el.tagName.toLowerCase();

	if (a == "a") {
		e.preventDefault();
		carregaPagina(el.getAttribute("href"));
	}
});

function carregaPagina(url) {
	fetch(url)
		.then((response) => {
			if (response.status >= 200 && response.status < 300) {
				return response.text();
			} else {
				throw new Error(response.statusText);
			}
		})
		.then((responseText) => successHandler(responseText))
		.catch((e) => console.error(e));
}

function successHandler(response) {
	let area = document.querySelector(".area");
	area.innerHTML = response;
}
