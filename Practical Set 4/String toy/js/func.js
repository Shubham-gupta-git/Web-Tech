function run() {
	if (up.checked){
		upper();
		console.log('hi')
	} else if(low.checked){
		lower();
	} else if(rev.checked){
		rever();
	} else if(conc.checked){
		concatenate();
	}
}
inpt.oninput=function() {run()};
inpt2.oninput=function() {concatenate()};