var index = 0; 
var locations = ["Puertas","Puertas","Puertas","ventanas","ventanas","ventanas", "sillas/sillones", "sillas/sillones","muebles","muebles","muebles", "diseños especiales", "diseños especiales", "diseños especiales"]

var slides = document.getElementsByClassName("slides"); 
var nextArrow = document.getElementById("next");

var previousArrow = document.getElementById("previous");

var place = document.getElementById("place");

var dotsContainer = document.getElementById("dotsContainer");

var dotArray = document.getElementsByClassName("dots"); 

createDots(); 
showSlides(index); 

function createDots() {
	for (i=0; i<slides.length; i++) {
	var dot = document.createElement("span");
	dot.className = "dots"; 
	dotsContainer.appendChild(dot); 
	}
}

function showSlides(x) {
	if (x > slides.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides.length-1; 
	}
	for (i=0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
		dotArray[i].className = "dots";  
	}
	
	slides[index].style.display = "block";
	dotArray[index].className += " activeDot"; 
	place.innerHTML = locations[index]; 
}

nextArrow.onclick = function() {
	index += 1; 
	showSlides(index); 
} 

previousArrow.onclick = function() {
	index -= 1; 
	showSlides(index); 
} 

dotArray[0].onclick = showSlides(1); 
