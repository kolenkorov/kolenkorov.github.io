$(document).ready(function() {
	let menu_btn = $('.burger-icon');
	let nav = $('nav');
	let a = $('.nav-list li a');

	menu_btn.on('click', toggle);
	a.on('click', toggle);

	function toggle(){
		menu_btn.toggleClass('burger-icon_active');
 		nav.toggleClass('active')		
	}	
});