$(document).ready(function() {
	let menu_btn = $('.burger-icon');
	let list = $('.list');
	let a = $('.list li a');

	let phone = $('header .phone');

	menu_btn.on('click', toggle);
	a.on('click', toggle);

	function toggle(){
		menu_btn.toggleClass('burger-icon_active');
 		list.toggleClass('active');
 		phone.toggleClass('margin');
	}	
});