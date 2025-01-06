function checkNumber() {
	var num = document.getElementById("numberInput").value;
	var result = document.getElementById("result");
	if (num === "") {
		result.innerHTML = "Enter a number.";
		return;
	}
	num = parseFloat(num);
	if (num > 0) {
		result.innerHTML = "The number is positive.";
	} else if (num < 0) {
		result.innerHTML = "The number is negative.";
	} else {
		result.innerHTML = "The number is zero.";
	}
}