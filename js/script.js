function menuLateral() {
	var slider = document.getElementById("menu");

	if (slider.style.right == "0px") {
		slider.style.right = "-1000px";
	}
	else {
		slider.style.right = "0px";
	}
}