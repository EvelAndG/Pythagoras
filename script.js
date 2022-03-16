var button = document.querySelector('button');
button.addEventListener("click", runPythagoras)



function runPythagoras() {
	var a = parseFloat(document.getElementById("aInput").value);
	var b = parseFloat(document.getElementById("bInput").value);
	var c = (a*a)+(b*b);
	var hypotenuse = Math.sqrt(c);

	document.getElementById("cOutput").append(hypotenuse);

	
}



