$(document).ready(function() {
	
	FastClick.attach(document.body);
	
	$('.homepage, .weather, .weather-page02, .block-img, #main-nav, #main-nav .person .img').each(function() {
		if ($(this).children('.bg').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('.bg').hide();
		}
	});

	$('<span class="fader">').appendTo('body');
	$('.open-menu').click(function(){
		$('html').toggleClass('menu-opened');
		return false;
	});
	$('.fader').click(function(){
		$('html').removeClass('menu-opened');
	});

	$('body').on('touchmove', function(event) {
		if ($('html').hasClass('menu-opened')) {
			if ($('#main-nav .holder').has(event.target).length) {
				return true;
			} else {
				event.preventDefault();
			}
		}
	});

	var allWidtchEl = 0,
		listEl = $('.event .month');

	$('.event .next').on('click', function(event) {
		if ((listEl.find('li.active').next().length)){
			listEl.find('.passed').removeClass('passed');
			listEl.find('.active').removeClass('active').addClass('passed').next().addClass('active');
			var widtchEl = $('.event .month').find('.passed').outerWidth();
			allWidtchEl += widtchEl;
			listEl.css({
				left: '-' + allWidtchEl + 'px',
			});
		}
		event.preventDefault();
	});

	$('.event .prev').on('click', function(event) {
		if ((listEl.find('.active').prev().length)){
			var widtchEl = $('.event .month').find('.passed').outerWidth();
			allWidtchEl -= widtchEl;
			listEl.css({
				left:  '-' + allWidtchEl + 'px',
			});
			listEl.find('.passed').removeClass('passed').prev().addClass('passed');
			listEl.find('.active').removeClass('active').prev().addClass('active');
		}

		if ((listEl.find('.active').prev().length == 0)){
			listEl.css({
				left: '-' + 0 + 'px',
			});
			allWidtchEl = 0;
		}
		event.preventDefault();
	});

	$(window).on('resize', function() {
		if ($('.event .month .active').length) {
			setTimeout(function(){
				var offsetLeft = $('.event .month .active').position().left;
				$('.event .month').css({
					left: '-' + offsetLeft + 'px',
				});
				allWidtchEl = offsetLeft;
			}, 300);
		}
	});

});