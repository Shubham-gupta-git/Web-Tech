function calc(a,b){
	let one=parseFloat(n1.value);
	let two=parseFloat(n2.value);
	box.style.opacity="1";
	if (isNaN(one)){
		one=0;
	}
	if (isNaN(two)){
		two=0;
		if (b=="/" && two==0){
			result.innerHTML="Can't divide by zero";
			return;
		}
	}
	result.innerHTML=one+b+two+"=";
	note.innerHTML=a;
	result.innerHTML= result.innerText + eval(`${one}${b}${two}`);
}
let n1=document.getElementById("n1");
let n2=document.getElementById("n2");
let result=document.getElementById("Result");
let box=document.getElementById("r");
let note=document.getElementById("note");
document.getElementById("add").onclick=function() {calc("Added","+")};
document.getElementById("sub").onclick=function() {calc("Subtracted","-")};
document.getElementById("mul").onclick=function() {calc("Multiplied","*")};
document.getElementById("div").onclick=function() {calc("Divided","/")};