const request = (obj) => {
	let xhr = new XMLHttpRequest();
	xhr.open(obj.method, obj.url);
	xhr.send();
	xhr.addEventListener("load", (e) => {
		if (xhr.status >= 200 && xhr.status < 300) {
			obj.success(xhr.responseText);
		} else {
			obj.error(xhr.statusText);
		}
	});
};

document.addEventListener("click", (e) => {
	const el = e.target;
	const a = el.tagName.toLowerCase();

	if (a == "a") {
        e.preventDefault()
		carregaPagina(el.getAttribute('href'));
	}
});

function carregaPagina(url) {
	const obj = {
		url: url,
		method: "GET",
		success: (response) => {
			successHandler(response);
		},
		error: (error) => {
			errorHandler(error);
		},
	};

	request(obj);
}

function successHandler(response) {
	let area = document.querySelector(".area");
	area.innerHTML = response;
}

function errorHandler(errorMessage) {
	console.log(errorMessage);
}
