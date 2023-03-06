var result = document.getElementById('result');

function addSymbol(symbol) {
	result.value += symbol;
}

function calculate() {
	result.value = eval(result.value);
}

function clearResult() {
	result.value = '';
}

function deleteLast() {
	result.value = result.value.slice(0, -1);
}
