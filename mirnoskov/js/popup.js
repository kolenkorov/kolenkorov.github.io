window.onload = function(){

	var p = new Popup({
		overlay: '.overlay',
		popup: '.popup',
	});
	
	
	$('.open-classic').on('click', function(){
		var check = $('.options_1 input[type=radio]');

		if(!check.is(':checked')){
			alert('Выберите кол-во пар');
			return false;
		}
		else{

			var classic = $('.cover-classic');
			p.openPopup(classic.html());
		
			formInit('#classic');
		}
	});

	$('.open-bamboo').on('click', function(){
		var check = $('.options_2 input[type=radio]');

		if(!check.is(':checked')){
			alert('Выберите кол-во пар');
			return false;
		}
		else{

			var bamboo = $('.cover-bamboo');
			p.openPopup(bamboo.html());
		
			formInit('#bamboo');
		}
	});


	$('.open-business').on('click', function(){
		var check = $('.options_3 input[type=radio]');

		if(!check.is(':checked')){
			alert('Выберите кол-во пар');
			return false;
		}
		else{ 
			var business = $('.cover-business');
			p.openPopup(business.html());
			
			formInit('#business');
		}	
	});

	$('.open-mercerizeden').on('click', function(){
		var check = $('.options_4 input[type=radio]');

		if(!check.is(':checked')){
			alert('Выберите кол-во пар');
			return false;
		}
		else{
			var mercerizeden = $('.cover-mercerizeden');
			p.openPopup(mercerizeden.html());
			
			formInit('#mercerizeden');
		}	
	});

	$('.open-wool').on('click', function(){
		var check = $('.options_5 input[type=radio]');

		if(!check.is(':checked')){
			alert('Выберите кол-во пар');
			return false;
		}
		else{
			var wool = $('.cover-wool');
			p.openPopup(wool.html());
		
			formInit('#wool'); 
		}
	});

	$('.open-supermix-1').on('click', function(){
		var supermix_1 = $('.cover-supermix-1');
		p.openPopup(supermix_1.html());
		
		calc('#supermix-1'); 
	});

	$('.open-supermix-2').on('click', function(){
		var supermix_2 = $('.cover-supermix-2');
		p.openPopup(supermix_2.html());
		
		calc('#supermix-2'); 
	});

	$('.open-supermix-3').on('click', function(){
		var supermix_3 = $('.cover-supermix-3');
		p.openPopup(supermix_3.html());
		
		calc('#supermix-3'); 
	});

	$('.open-supermix-4').on('click', function(){
		var supermix_4 = $('.cover-supermix-4');
		p.openPopup(supermix_4.html());
		
		calc('#supermix-4'); 
	});

	$('.open-supermix-5').on('click', function(){
		var supermix_5 = $('.cover-supermix-5');
		p.openPopup(supermix_5.html());
		
		calc('#supermix-5'); 
	});
	
}

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