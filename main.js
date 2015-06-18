//by Tofran
function edit(){
	var input = document.getElementById("textbox1").value;
	//get the code
	var lobby = parseInt(input.replace(" ", "").substr(22,18));

	//@todo validate correcly
	if (lobby > 0) {
		//add the links
		for (i = 1; i < 1499; ++i){
			//create the new link, and set the atrubutes
			var newLink = document.createElement("a");
			newLink.setAttribute("class", "joinLink");
			newLink.setAttribute("target", "_blank");
			newLink.setAttribute("href", "steam://joinlobby/730/" + lobby + i);
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
