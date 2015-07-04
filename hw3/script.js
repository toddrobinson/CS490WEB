/*
	Function to toggle appearance of .pullDown, which is at the top of the page.
	Main function gets called on document ready.
	Using jQuery version 2.1.3, loaded from google hosed lib.
*/
var main = function(){
	$('.mozillaBannerDrop').click(function(){
		$('.pullDown').slideToggle("fast");
	});
}


$(document).ready(main);