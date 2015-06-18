//by Tofran
function edit(){
	var input = document.getElementById("textbox1").value.replace(" ", "");
	//@todo validate correcly
	if(input != ""){
		//get the code and convert it (btw only the last 8 chars, max possible comb's 10^8)
		var lobby8 = parseFloat(input.substr(32,8));
		//add the links
		for (i = 1; i < 1499; ++i){
			//increment the lobby
			lobby8++;
			//create the new link, and set the atributes
			var newLink = document.createElement("a");
			newLink.setAttribute("class", "joinLink");
			newLink.setAttribute("target", "_blank");
			newLink.setAttribute("href", input.substr(0,32) + getString8(lobby8));
			newLink.innerHTML = "Join " + i + " ";

			//add the new link
			document.getElementById('linksHere').appendChild(newLink);
		}
	}	
}

function cleanTextBox(){
	//clean textboxes
	document.getElementById("textbox1").value = "";
	//clear the links
	document.getElementById("linksHere").innerHTML = "";
}


function getString8(num) {
    var s = num+"";
    while (s.length < 8){
    	s = "0" + s;
    }
    return s;
}