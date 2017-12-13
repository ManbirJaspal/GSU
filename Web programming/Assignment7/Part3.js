function funcone() {
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	document.getElementById("one").innerHTML = this.responseText;
    	}
  	};
 	xhttp.open("GET", "oneInformation.txt", true);
  	xhttp.send();
}	

function functwo() {
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	document.getElementById("two").innerHTML = this.responseText;
    	}
	};
 	xhttp.open("GET", "twoInformation.txt", true);
  	xhttp.send();
}	

function functhree() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("three").innerHTML = this.responseText;
	    }
  	};
	xhttp.open("GET", "threeInformation.txt", true);
	xhttp.send();
}

function funcfour() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("four").innerHTML = this.responseText;
	    }
  	};
	xhttp.open("GET", "fourInformation.txt", true);
	xhttp.send();
}	

function funcfive() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("five").innerHTML = this.responseText;
	    }
  	};
	xhttp.open("GET", "fiveInformation.txt", true);
	xhttp.send();
}