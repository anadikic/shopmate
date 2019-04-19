$(function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#lower").val("$" + ui.values[0]);
				$("#heigher").val("$" + ui.values[1]);
			}
		});
		$("#lower").val("$" + $("#slider-range").slider("values", 0));
		$("#heigher").val("$" + $("#slider-range").slider("values", 1));

		$('.summary .link').click(function () {
			$(this).toggleClass('open');

			if ($(this).hasClass('open')) {
				$('.filter .white-part').slideDown();
			} else {
				$('.filter .white-part').slideUp();
			}
		});
	}

);
