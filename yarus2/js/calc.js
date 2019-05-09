function formInit(formId) {

	var pairsSelector = '.pairs input:checked',
		numberSelector = formId + ' .number',
		priceSelector = formId + ' .price',
	   
		
		$pairs = $(pairsSelector),
		$number = $(numberSelector),
		$price = $(priceSelector);

	function showPrice(){        
		var 
			number = parseInt( $number.val() || 1 ),
			pairs = parseInt($pairs.val());
			
		$price.text(pairs * number);
	}

	$(pairsSelector + ', ' + numberSelector).change(showPrice);

	$number.on('keyup', showPrice);
	showPrice();

	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}

function calc(form) {

	var pairsSelector = form + ' .head',
		numberSelector = form + ' .number',
		priceSelector = form + ' .price',
	   
		
		$pairs = $(pairsSelector),
		$number = $(numberSelector),
		$price = $(priceSelector);

	function showPrice(){        
		var 
			number = parseInt( $number.val() || 1 ),
			pairs = parseInt($pairs.data('price'));
			
		$price.text(pairs * number);
	}

	$(pairsSelector + ', ' + numberSelector).change(showPrice);

	$number.on('keyup', showPrice);
	showPrice();

	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}