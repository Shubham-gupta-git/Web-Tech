function open(a) {
	a.style.display = 'flex';
	nav.style.display = 'none';
	if (a==overlaysearch){
		sbox.focus()
	}
	document.body.style.overflow="hidden";
}
function close(a) {
	a.style.display = 'none';
	nav.style.display = 'flex';
	document.body.style.overflow="auto";
}
function fimg() {
	np.src = nposter.value;
}
function savemovie() {
	if (!(nposter.value.trim() === "") && !(nmovie.value.trim() === "") && !(ndesc.value.trim() === "")) {
		movie.innerHTML = `<section class="mbox" id="${nmovie.value.replace(" ", "_")}"><img src=${nposter.value.replace("file:///", "")} class="mposter"><h2 class="mname">${nmovie.value}</h2><p class="mdesc">${ndesc.value}</p></section>` + mbox.innerHTML;
		close(overlayadd);
		idlst = function () { idlist() };
	} else {
		info.innerHTML = "Please enter all details."
	}
}
function idlist(className) {
	var elements = document.getElementsByClassName(className);
	var elementsArray = Array.from(elements);
	var ids = elementsArray.map(function (element) {
		return element.id;
	}).filter(function (id) {
		return id !== "";
	});
	return ids;
}
function search(a) {
	a
}
function search() {
	searchres.innerHTML=""
	var filter = sbox.value.toLowerCase().replace(" ", "_");
	var lst=idlist("mbox");
	console.log(lst,filter);
	
	if (!filter==""){
		for (var i = 0; i < lst.length; i++) {
			if (lst[i].toLowerCase().indexOf(filter)>-1) {
				searchres.innerHTML+=document.getElementById(lst[i]).outerHTML
			}
		}
	}else{
		searchres.innerHTML="No result found."
		
	}
}