let inpt = document.getElementById("inp");
let inpt2 = document.getElementById("inp2");
let op = document.getElementById("op")
function upper() {
	op.innerHTML = inpt.value.toUpperCase();
}
function lower() {
	op.innerHTML = inpt.value.toLowerCase();
}
function rever() {
	op.innerHTML = inpt.value.split('').reverse().join('');
}
function concatenate() {
	op.innerHTML = inpt.value + inpt2.value;
}