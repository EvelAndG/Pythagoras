var button = document.querySelector('button');
//button.addEventListener("click", runPythagoras)
var formElem = document.getElementById("calc-form");

var aElem = document.getElementById("aInput");


formElem.onsubmit = function(event) {

    // QUIZ
    // what happens if we don't do this?
    event.preventDefault();

    // QUIZ
    // what happens if we don't do this?
    clearError();

		var a = parseFloat(document.getElementById("aInput").value);
	var b = parseFloat(document.getElementById("bInput").value);



    // figure out the height the user typed
    //heightStr = heightElem.value;

    // TODO 1
    // if they didn't type anything at all, give a different error message,
    // something like "Please provide a height"

		if ( a  <= 0) {
			displayError("Values must be positive");
			return;
		}
		if ( b  <= 0) {
			displayError("Values must be positive");
			return;
		}

   if (isNaN(a)) {
        displayError("Please fill in values");
        return;
    }
	   if (isNaN(b)) {
        displayError("Please fill in values");
        return;
    }
	
	
	

  


    
		runPythagoras();
}

function displayError(message) {
    aElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}

function clearError(message) {
    // TODO 3
    // implement this function.
	document.querySelector(".error-message").innerHTML = "";
}




function runPythagoras() {

	document.getElementById("cOutput").innerHTML="";

	var a = parseFloat(document.getElementById("aInput").value);
	var b = parseFloat(document.getElementById("bInput").value);
	
	
	var c = (a*a)+(b*b);
	var hypotenuse = Math.sqrt(c);

	document.getElementById("cOutput").append(hypotenuse);

	
}




