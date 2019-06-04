

	var p = new Popup({
		overlay: '.overlay',
		popup: '.popup',
	});
	
	$('.review-1 .read_more').on('click', function(){
		var review = $('.review-1');
		p.openPopup(review.html());
		$('.open .read_more').css('display', 'none');
	});

	$('.review-2 .read_more').on('click', function(){
		var review = $('.review-2');
		p.openPopup(review.html());
		$('.open .read_more').css('display', 'none');
	});

	$('.review-3 .read_more').on('click', function(){
		var review = $('.review-3');
		p.openPopup(review.html());
		$('.open .read_more').css('display', 'none');
	});

	$('.review-4 .read_more').on('click', function(){
		var review = $('.review-4');
		p.openPopup(review.html());
		$('.open .read_more').css('display', 'none');
	});

	$('.review-5 .read_more').on('click', function(){
		var review = $('.review-5');
		p.openPopup(review.html());
		$('.open .read_more').css('display', 'none');
	});

	$('.review-6 .read_more').on('click', function(){
		var review = $('.review-6');
		p.openPopup(review.html());
		$('.open .read_more').css('display', 'none');
	});

	$('.review-7 .read_more').on('click', function(){
		var review = $('.review-7');
		p.openPopup(review.html());
		$('.open .read_more').css('display', 'none');
	});



	//NoCover
	let call_me = $('.call-me');
	let overlay = $('.overlay');

	$('.number-phone__buy').on('click', function(){
		call_me.addClass('open');
		overlay.addClass('open');
	});

	$('.overlay, .close').on('click', function(){
		call_me.removeClass('open');
		overlay.removeClass('open');
	});


function Popup(object){
		
	this.popup = $(object.popup);
	this.overlay = $(object.overlay);

	var context = this;

	this.openPopup = function(content){
		context.popup.html(content);
		context.overlay.addClass('open');
		context.popup.addClass('open'); 
	}
	
	this.closePopup = function(){
		context.popup.removeClass('open'); 
		context.overlay.removeClass('open');        
	}

	this.overlay.on('click', context.closePopup);

	this.popup.on('click', '.close', context.closePopup);
}