$(document).ready(function(){
	// Carousel vars
	var carousel, items, next, prev;

	carousel = $(".carousel__container");
	items = $(".carousel__item");

	next = function(el) {
		if (el.next().length > 0) {
			return el.next();
		} else {
			return items.first();
		}
	}

	prev = function (el) {
        if (el.prev().length > 0) {
            return el.prev();
        } else {
            return items.last();
        }
    }

    var el, new_item, i, j, ref;
    // ON CLICK
    $('.arrownav__arrow').on('click', function(e) {
    	el = $('.carousel__item--before').removeClass('carousel__item--before');

		if ($(this).hasClass("carousel__navigation--right")) {
			new_item = next(el);
			carousel.removeClass('carousel__container--reversed');
		} else {
			new_item = prev(el);
            carousel.addClass('carousel__container--reversed');
		}

		new_item.addClass('carousel__item--before').css('order', 1);
		for (i = j = 2, ref = items.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            new_item = next(new_item).css('order', i);
        }

		carousel.removeClass('no-transform');
        return setTimeout(function () {
            return carousel.addClass('no-transform');
        }, 50);
	});

    // ON ARROW PRESS
    document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    switch (evt.keyCode) {
	        case 37:
	            leftArrowPressed();
	            break;
	        case 39:
	            rightArrowPressed();
	            break;
	    }
	}

	function leftArrowPressed() {
		el = $('.carousel__item--before').removeClass('carousel__item--before');

	    new_item = prev(el);
	    console.log(new_item);
        carousel.addClass('carousel__container--reversed');

        new_item.addClass('carousel__item--before').css('order', 1);
		for (i = j = 2, ref = items.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            new_item = next(new_item).css('order', i);
        }

		carousel.removeClass('no-transform');
        return setTimeout(function () {
            return carousel.addClass('no-transform');
        }, 50);
	}

	function rightArrowPressed() {
		el = $('.carousel__item--before').removeClass('carousel__item--before');

	    new_item = next(el);
		carousel.removeClass('carousel__container--reversed');

		new_item.addClass('carousel__item--before').css('order', 1);
		for (i = j = 2, ref = items.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            new_item = next(new_item).css('order', i);
        }

		carousel.removeClass('no-transform');
        return setTimeout(function () {
            return carousel.addClass('no-transform');
        }, 50);
	}
});