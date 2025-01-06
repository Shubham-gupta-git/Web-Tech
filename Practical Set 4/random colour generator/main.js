function color() {
	var color = '#' + (Math.random() * 0xffffff << 0).toString(16);
	document.querySelector('body').style.backgroundColor = color;
	document.querySelector('input').value = color;
}
function image(){
	var ran=Math.floor((Math.random()*8)+1);
	document.querySelector('input').value = ran;
	document.querySelector('body').style.background = `center/cover no-repeat url('bg/bg${ran}.png')`;
}
let generator=document.getElementById('generator');
let img=document.getElementById('image');
generator.onclick=function() {color()}
img.onclick=function() {image()}