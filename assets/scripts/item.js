$(function(){
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

		$('.related .wrapper').scrollbar({
			"showArrows": true,
			"scrollx": "advanced",
			"scrolly": "advanced"
	});
});