$(function(){
	openChart();
	openSearch();
	// $(".owl-carousel").owlCarousel(
	// 	{
	// 		center: true,
	// 		items:1,
	// 		loop:true,
	// 		dots:true
	// 	}
	// );
	
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
		centerMode: true,
		focusOnSelect: true
	  });

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );

});

$(window).on('load', function() {
});

$(window).resize(function(){
});

function openChart() {
	$('.bag').on('click', function() {
		$('.chart').slideDown();
	});
	$('.chart .close').on('click', function() {
		$('.chart').slideUp();
	});
}

function openSearch() {
	$('.search').on('click', function() {
		$(this).toggleClass('active');
		if ($(this).next().hasClass('active')) {
			$(this).next().hide('slow').removeClass('active');
			$(this).next().find('nav-dropdown').hide().removeClass('active');
		} else {
			$(this).next().show('slow').addClass('active');
		}
	});
}


