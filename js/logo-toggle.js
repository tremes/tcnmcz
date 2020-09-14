
// GET PARTNERS LOGOS AND CHANGE DISPLAY EVERY 4 S

var images = $(".logo");

$(images[0]).css("display", "inline");
$(images[1]).css("display", "inline");
$(images[2]).css("display", "inline");

function toggleImgVisibility() {
	$(images).each(function(){
		$(this).toggle();
	});
}

setInterval(toggleImgVisibility, 4000);
