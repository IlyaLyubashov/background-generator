function changeGradient(event){
	var newColor = this.value;
	if(event.target.name==="color1")
		color1 = newColor;
	else
		color2 = newColor;
	body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;
	h3.textContent = `background: linear-gradient(to right, ${color1} , ${color2});`;
}

var body = document.querySelector("body");
var colInput1 = document.querySelector("input[name='color1']");
var colInput2 = document.querySelector("input[name='color2']");
var h3 = document.querySelector("h3");
var color1 = '"#ff0000"';
var color2 = "#00ff00";
colInput1.addEventListener("input", changeGradient);
colInput2.addEventListener("input", changeGradient); 


