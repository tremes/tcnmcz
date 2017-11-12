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
