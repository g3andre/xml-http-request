const request = (obj) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(obj.method, obj.url);
		xhr.send();
		xhr.addEventListener("load", (e) => {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.statusText);
			}
		});
	});
};

document.addEventListener("click", (e) => {
	const el = e.target;
	const a = el.tagName.toLowerCase();

	if (a == "a") {
		e.preventDefault();
		carregaPagina(el.getAttribute("href"));
	}
});

async function carregaPagina(url) {
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

	try {
		const response = await request(obj);
		successHandler(response);
	} catch (e) {
		errorHandler(e);
	}
}

function successHandler(response) {
	let area = document.querySelector(".area");
	area.innerHTML = response;
}

function errorHandler(errorMessage) {
	console.log(errorMessage);
}
