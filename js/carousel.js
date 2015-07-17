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
    	el = $('.is-ref').removeClass('is-ref');

		if ($(this).hasClass("carousel__navigation--right")) {
			new_item = next(el);
			carousel.removeClass('is-reversing');
		} else {
			new_item = prev(el);
            carousel.addClass('is-reversing');
		}

		new_item.addClass('is-ref').css('order', 1);
		for (i = j = 2, ref = items.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            new_item = next(new_item).css('order', i);
        }

		carousel.removeClass('is-set');
        return setTimeout(function () {
            return carousel.addClass('is-set');
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
		el = $('.is-ref').removeClass('is-ref');

	    new_item = prev(el);
	    console.log(new_item);
        carousel.addClass('is-reversing');

        new_item.addClass('is-ref').css('order', 1);
		for (i = j = 2, ref = items.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            new_item = next(new_item).css('order', i);
        }

		carousel.removeClass('is-set');
        return setTimeout(function () {
            return carousel.addClass('is-set');
        }, 50);
	}

	function rightArrowPressed() {
		el = $('.is-ref').removeClass('is-ref');

	    new_item = next(el);
		carousel.removeClass('is-reversing');

		new_item.addClass('is-ref').css('order', 1);
		for (i = j = 2, ref = items.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            new_item = next(new_item).css('order', i);
        }

		carousel.removeClass('is-set');
        return setTimeout(function () {
            return carousel.addClass('is-set');
        }, 50);
	}
});