$(function(){
	openChart();
	openSearch();
	$(".owl-carousel").owlCarousel(
		{
			center: true,
			items:1,
			loop:true,
			dots:true
		}
	);

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


