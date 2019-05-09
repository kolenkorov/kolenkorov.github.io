$(document).ready(function() {
	let menu_btn = $('.burger-icon');
	let nav = $('.main-header__navbar');
	let drop = $('.item-drop');

	menu_btn.on('click', toggle);
	drop.on('click', function(){
		$(this).toggleClass('item-active');
		$('.nav-drop').toggleClass('nav-drop--active')
		$('.main-header__link').toggleClass('main-header__link--active')
	});

	function toggle(){
		menu_btn.toggleClass('burger-icon_active');
 		nav.toggleClass('main-header__navbar--active')
	}
});