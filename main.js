//by Tofran
function edit(){
	//get the code
	var lobby = parseInt(document.getElementById("textbox1").value.replace(" ", "").substr(22,18));

	//change the links
	for (i = 1; i < 10; ++i){ 
		document.getElementById("connect" + i).href = "steam://joinlobby/730/" + lobby + i;
	}
} 


function cleanTextBox(){
	//clean textboxes
	document.getElementById("textbox1").value = '';
	//@todo clear the links
}
