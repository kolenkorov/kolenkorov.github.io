$(document).ready(function() {

	let popup_quiz = $('.popup__quiz');
	let overlay = $('.overlay');

	$('.house-price a').on('click', function(){
		popup_quiz.addClass('open');
		overlay.addClass('open');
	});

	$('.overlay').on('click', function(){
		popup_quiz.removeClass('open');
		overlay.removeClass('open');
	});


	$('.ask-1 .quiz-next').on('click', function(){
		$(".ask-1 input[type='radio']:checked").each(function() {
			var idRadio = $(this).attr("id");
			var result = $("label[for='"+idRadio+"']").text().replace(/\s{2,}/g, ' ');

			$('.ask-final .type').val(result);
		});
	});

	$('.ask-2 .quiz-next').on('click', function(){
		$(".ask-2 input[type='radio']:checked").each(function() {
			var idRadio = $(this).attr("id");
			var result = $("label[for='"+idRadio+"']").text().replace(/\s{2,}/g, ' ');

			$('.ask-final .stairs').val(result);
		});
	});

	$('.ask-3 .quiz-next').on('click', function(){
		$(".ask-3 input[type='radio']:checked").each(function() {
			var idRadio = $(this).attr("id");
			var result = $("label[for='"+idRadio+"']").text().replace(/\s{2,}/g, ' ');

			$('.ask-final .fencing').val(result);
		});
	});

	$('.ask-4 .quiz-next').on('click', function(){
		let result = $(".ask-4 .slider-1_input_val").val();

		$('.ask-final .area').val(result + ' m2');
	});

	$('.ask-5 .quiz-next').on('click', function(){
		$(".ask-5 input[type='radio']:checked").each(function() {
			var idRadio = $(this).attr("id");
			var result = $("label[for='"+idRadio+"']").text().replace(/\s{2,}/g, ' ');

			$('.ask-final .painting').val(result);
		});
	});

	$('.ask-6 .quiz-next').on('click', function(){
		let result = $(".ask-6 .slider-2_input_val").val();

		$('.ask-final .height').val(result + ' m');
	});


	$('.quiz-next').on('click', function(){
		$('.quiz__ask').removeClass('quiz--active');
		$(this).closest('.quiz__ask').next('div').addClass('quiz--active');
	});
});