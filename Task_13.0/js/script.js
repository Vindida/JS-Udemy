'use strict';

let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');
console.log(inputRub, inputUsd);
inputRub.addEventListener('input', () => {
	let request = new XMLHttpRequest();
	inputUsd.value='1';
	request.open("GET", "js/current.json");
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('readystatechange', function() {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = inputRub.value / data.usd;
		} else {
			inputUsd.value = "что-то пошло не так!";
		}
	});
})