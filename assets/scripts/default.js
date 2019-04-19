$(function () {
	openChart();
	openSearch();
	openSignIn();
	signIn();
	addToChart();
	buy();

	$('.open-menu').click(function () {
		$(this).toggleClass('open');
		$('body').toggleClass('overflow-hidden');

		if ($(this).hasClass('open')) {
			$('.main-nav').slideDown();
			//$(this).removeClass('open');
		} else {
			$('.main-nav').slideUp();
			//$(this).addClass('open');
		}
	});

});

$(window).on('load', function () {});

$(window).resize(function () {});

function openChart() {
	$('.bag').on('click', function () {
		$('.chart').slideDown();
	});
	$('.chart .close').on('click', function () {
		$('.chart').slideUp();
	});
}

function openSearch() {
	$('.search').on('click', function () {
		$(this).next().show('slow');
	});
	$('.search-wrapper .close').on('click', function () {
		$('.search-input-wrapper').hide('slow');
	});
}

function openSignIn() {
	$('.sign-in').on('click', function () {
		$('.sign-in-wrapper').show('slow');
	});
	$('.sign-in-wrapper .close').on('click', function () {
		$(this).parent().hide('slow');
	});
}

function signIn() {
	$('#signIn').submit(function (e) {
		e.preventDefault();
		var username_valid = true;
		var password_valid = true;

		if ($('.username').val().length == 0) {
			$('.username').addClass('error');
			username_valid = false;
		}
		if ($('.password').val().length == 0) {
			$('.password').addClass('error');
			password_valid = false;
		}
		if (!(username_valid && password_valid)) {
			$('.sign-in-wrapper').effect('shake');
		} else {
			$('.sign-in-wrapper').hide('slow');
		}

	});
}

function addToChart() {
	$('.buy').on('click', function () {
		var cart = $('.chart-wrapper .bag');
		var imgtodrag = $(this).parent().parent('.item').find(".img-wrapper img").eq(0);
		var item = $(this).parent().parent('.item');

		if (imgtodrag) {
			var imgclone = imgtodrag.clone()
				.offset({
					top: imgtodrag.offset().top,
					left: imgtodrag.offset().left
				})
				.css({
					'opacity': '0.5',
					'position': 'absolute',
					'height': '150px',
					'width': '150px',
					'z-index': '100'
				})
				.appendTo($('body'))
				.animate({
					'top': cart.offset().top + 10,
					'left': cart.offset().left + 10,
					'width': 75,
					'height': 75
				}, 1000, 'easeInOutExpo');

			setTimeout(function () {
				cart.effect("shake", {
					times: 2
				}, 200);
			}, 1500);

			imgclone.animate({
				'width': 0,
				'height': 0
			}, function () {

				item.remove();
				$(this).detach();
			});
		}
	});
}

function buy() {
	$('.checkout').on('click', function () {
		$('.chart').fadeOut();
		$('.truck').fadeIn();
		$('.truck').animate({
			right: "-370px"
		}, 3000, function () {
			$('.truck').css('display', 'none');
			$('.truck').css('right', '20vw');
		})
	});
}
