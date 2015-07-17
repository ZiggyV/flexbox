$(document).ready(function(){
	$('.hamburger__toggle').on('click', function(e) {
		e.preventDefault();
		
		$('body').toggleClass('sidebar--active');
	});

	$('#overlay').on('click',function(e) {
		e.preventDefault();

		$('body').removeClass('sidebar--active');
	});
});