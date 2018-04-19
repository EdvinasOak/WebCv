$(document).ready(function(){


var controller = new ScrollMagic.Controller();
var ourScene   = new ScrollMagic.Scene({
	triggerElement: '#ABOUT'
})

setClassToggle('#ABOUT', 'fade-in')
.addTo(controller);
});