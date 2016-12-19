function displayMenu(){
	var x = document.getElementbyId("iglnav");
	if(x.className === "top-nav"){
		x.className += "responsive";
	} else{
		x.className = "top-nav";
	}
}