$(document).ready(function(){
	// TEXT CHANGE + OPEN/CLOSE MENU
	$('.navigation__toggle').on('click', function() {
		$('.navigation__wrapper').toggleClass('navigation__wrapper--visible');

		if ($('.navigation__wrapper').hasClass('navigation__wrapper--visible')){
			$('.navigation__toggle').html('CLOSE MENU');
		} else {
			$('.navigation__toggle').html('OPEN MENU');
		}
	});
});