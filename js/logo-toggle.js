
// GET PARTNERS LOGOS AND CHANGE DISPLAY EVERY 4 S

var images = $(".logo");

$(images[0]).css("display", "inline");
$(images[1]).css("display", "inline");
$(images[2]).css("display", "inline");

function toggleImgVisibility() {

	$(images[0]).toggle();
	$(images[1]).toggle();
	$(images[2]).toggle();
	$(images[3]).toggle();
	$(images[4]).toggle();
	$(images[5]).toggle();
}


setInterval(toggleImgVisibility, 4000);

// INITIALIZE BLUEIMP GALLERY

document.getElementById('links').onclick = function (event) {
	event = event || window.event;
	var target = event.target || event.srcElement,
		link = target.src ? target.parentNode : target,
		options = {index: link, event: event},
		links = this.getElementsByTagName('a');
	blueimp.Gallery(links, options);
};
