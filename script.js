document.addEventListener("click", (e) => {
	const el = e.target;
	const a = el.tagName.toLowerCase();

	if (a == "a") {
		e.preventDefault();
		carregaPagina(el.getAttribute("href"));
	}
});

async function carregaPagina(url) {
	try {
		let response = await fetch(url+'a');

		if (response.status >= 200 && response.status < 300) {
			let html = await response.text();
			successHandler(html);
		}else {
			throw new Error(response.statusText)
		}
	} catch (e) {
		console.warn(e);
	}
}

function successHandler(response) {
	let area = document.querySelector(".area");
	area.innerHTML = response;
}
