//by Tofran - http://tofran.com
function edit(){
	document.getElementById("linksHere").innerHTML = "";
	var input = document.getElementById("textbox1").value.replace(" ", "");
	//@todo validate correcly
	if(input != ""){
		//get the code and convert it (btw only the last 8 chars, max possible comb's 10^8)
		var lobby8 = parseFloat(input.substr(32,8));
		//add the links
		for (i = -200; i <= 2000; ++i){
			//create the new link, and set the atributes
			var newLink = document.createElement("a");
			newLink.setAttribute("class", "joinLink");
			newLink.setAttribute("target", "_blank");
			newLink.setAttribute("onclick", "visited(this)");
			newLink.setAttribute("href", input.substr(0,32) + getSwZeroLeft((lobby8 + i), 8));
			newLink.innerHTML = "Join #" + getSwZeroLeft(i, 4);		
			//if it overflows it will not be shown
			if((i!=0) && (lobby8+i < 99999999) && (lobby8+i > 0)){
				//add the new link
				document.getElementById('linksHere').appendChild(newLink);
			}
		}
	}	
}

function visited(thisLink){
	//get all the old links
	var oldLinks = document.getElementsByClassName("visited");
	//change their color
	for(var i=0; i<oldLinks.length; i++){
	    oldLinks[i].style.color = "#662900";
	}
	//set the newly clicked link with the respective class and color
	thisLink.setAttribute("class","visited");
	thisLink.style.color = "#FF1919";
}

function cleanTextBox(){
	//clean textboxes
	document.getElementById("textbox1").value = "";
	//clear the links
	document.getElementById("linksHere").innerHTML = "";
}

function getSwZeroLeft(num, nLenght) {
    var st = num+"";
    var isNegative = false;
    if(num<0){
    	nLenght--;
    	st = st.substr(1);
    	isNegative = true;
    }
    while (st.length < nLenght){
    	st = "0" + st;
    }
    if(isNegative){
    	st = "-" + st;
    }
    return st;
}