$(function () {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.for-slider'
	});
	$('.for-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider',
		dots: true,
		centerMode: false,
		focusOnSelect: true
	});

	$(".mcs-horizontal-example").mCustomScrollbar({
		axis: "x",
		theme: "dark-3",
		advanced: {
			autoExpandHorizontalScroll: true
		}
	});

});

// equal heights
function equalHeights() {
	$('.mcs-horizontal-example .item').each(function (e) {
		console.log();
		$(this).height($('.mcs-horizontal-example').height());
	});
}
