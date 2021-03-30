import $ from "jquery";

window.$ = $;

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

//Fade animation for each section
var controller = new ScrollMagic.Controller();

$(".animation").each(function () {
	// create a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: this,
		//duration: '85%',
		reverse: false,
		trigerHook: 1,
	})
		.setClassToggle(this, "fade-in")
		.addTo(controller);
});

//hero animation
TweenMax.to(".centered", 2, { y: -280, ease: Back.easeOut });

//Skills animation
var ctrl = new ScrollMagic.Controller();

$(".service").each(function () {
	var serviceStager = TweenMax.staggerFrom(
		".stagger",
		0.5,
		{ opacity: 0, y: 200, delay: 0.5 },
		0.2
	);

	new ScrollMagic.Scene({
		triggerElement: this,
		reverse: false,
	})
		.setTween(serviceStager)
		.addTo(ctrl);
});

//Contact animmation
$(".contact").each(function () {
	var serviceStager2 = TweenMax.staggerFrom(
		".stagger2",
		0.5,
		{ opacity: 0, y: 200, delay: 0.5 },
		0.2
	);

	new ScrollMagic.Scene({
		triggerElement: this,
		reverse: false,
	})
		.setTween(serviceStager2)
		.addTo(ctrl);
});
