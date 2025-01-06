let up = document.getElementById("up");
let low = document.getElementById("low");
let rev = document.getElementById("rev");
let conc = document.getElementById("conc");
let slider = document.getElementById("slider");
let ibox = document.getElementById("ibox");

function oc() {
	up.parentElement.style.backgroundColor = "transparent";
	if (up.checked) {
		slider.style.setProperty("transform", 'translateX(0px)');
		up.parentElement.style.backgroundColor = "transparent";
		upper();
	}
	else {
		up.parentElement.style.backgroundColor = "rgb(191, 202, 241)";
	}
	if (low.checked) {
		slider.style.setProperty("transform", 'translateX(100px)');
		low.parentElement.style.backgroundColor = "transparent";
		lower();
	}
	else {
		low.parentElement.style.backgroundColor = "rgb(191, 202, 241)";
	}
	if (rev.checked) {
		slider.style.setProperty("transform", 'translateX(200px)');
		rev.parentElement.style.backgroundColor = "transparent";
		rever();
	}
	else {
		rev.parentElement.style.backgroundColor = "rgb(191, 202, 241)";
	}
	if (conc.checked) {
		slider.style.setProperty("transform", 'translateX(300px)');
		conc.parentElement.style.backgroundColor = "transparent";
		concatenate();
		ibox.style.height="14em";
	}
	else {
		conc.parentElement.style.backgroundColor = "rgb(191, 202, 241)";
		ibox.style.height="5em";
	}
}
up.onload = function() { oc() }
up.onclick = function() { oc() }
low.onclick = function() { oc() }
rev.onclick = function() { oc() }
conc.onclick = function() { oc() }