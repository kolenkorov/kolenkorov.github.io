window.addEventListener('load', function(){
	let header = document.querySelector('.header')
	let burger = document.querySelector('.header__burger')
	let menu = document.querySelector('.header__nav')
	let itemsMenu = document.querySelectorAll('.header__nav-link');
	let footerNav = document.querySelector('.footer__nav')
	let hMenu = 100;


	//Menu
	burger.addEventListener('click', function(){
		this.classList.toggle('active');
		menu.classList.toggle('active');
	});

	menu.addEventListener('click', function(e){
		if(e.target.classList.contains('header__nav-link')){
			e.preventDefault();
			
			let link = e.target;
			scrollToId(link.hash, hMenu);

			menu.querySelector('.header__nav-link.active').classList.remove('active');
			link.classList.add('active');
		}
	});

	footerNav.addEventListener('click', function(e){
		if(e.target.classList.contains('footer__nav-link')){
			e.preventDefault();
			
			let link = e.target;
			scrollToId(link.hash, hMenu);

			footerNav.querySelector('.footer__nav-link.active').classList.remove('active');
			link.classList.add('active');
		}
	});

	//Scroll
	document.addEventListener('scroll', function() {
		if(scrollY > 5) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	});
	
	document.addEventListener('scroll', function(e) {	
		let pos = window.scrollY;

		
		for(let i = itemsMenu.length-1; i>=0; i--) {
			let link = itemsMenu[i];
			let header = document.querySelector(link.hash)
			
			if(pos > ((getCoords(header).top) - (window.innerHeight / 1.7)))  {
				menu.querySelector('.active').classList.remove('active')
				link.classList.add('active')
		 		break;
			}
		}
	});
});


/* Functions */ 
function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + scrollY
	}  
}

function scrollToId(id, h){
	let target = document.querySelector(id);

	if(target !== null){
		let pos = getCoords(target).top - h;

		window.scrollTo({
			top: pos,
			behavior: "smooth"
		});
	}
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcblx0bGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKVxyXG5cdGxldCBpdGVtc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpO1xyXG5cdGxldCBmb290ZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19uYXYnKVxyXG5cdGxldCBoTWVudSA9IDEwMDtcclxuXHJcblxyXG5cdC8vTWVudVxyXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0bWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX25hdi1saW5rJykpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbGluayA9IGUudGFyZ2V0O1xyXG5cdFx0XHRzY3JvbGxUb0lkKGxpbmsuaGFzaCwgaE1lbnUpO1xyXG5cclxuXHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGluay5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Zm9vdGVyTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb3Rlcl9fbmF2LWxpbmsnKSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBsaW5rID0gZS50YXJnZXQ7XHJcblx0XHRcdHNjcm9sbFRvSWQobGluay5oYXNoLCBoTWVudSk7XHJcblxyXG5cdFx0XHRmb290ZXJOYXYucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fbmF2LWxpbmsuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vU2Nyb2xsXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZihzY3JvbGxZID4gNSkge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1x0XHJcblx0XHRsZXQgcG9zID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG5cdFx0XHJcblx0XHRmb3IobGV0IGkgPSBpdGVtc01lbnUubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xyXG5cdFx0XHRsZXQgbGluayA9IGl0ZW1zTWVudVtpXTtcclxuXHRcdFx0bGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluay5oYXNoKVxyXG5cdFx0XHRcclxuXHRcdFx0aWYocG9zID4gKChnZXRDb29yZHMoaGVhZGVyKS50b3ApIC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDEuNykpKSAge1xyXG5cdFx0XHRcdG1lbnUucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0IFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiBGdW5jdGlvbnMgKi8gXHJcbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XHJcblx0bGV0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0b3A6IGJveC50b3AgKyBzY3JvbGxZXHJcblx0fSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvSWQoaWQsIGgpe1xyXG5cdGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHJcblx0aWYodGFyZ2V0ICE9PSBudWxsKXtcclxuXHRcdGxldCBwb3MgPSBnZXRDb29yZHModGFyZ2V0KS50b3AgLSBoO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdHRvcDogcG9zLFxyXG5cdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG59Il0sImZpbGUiOiJtYWluLmpzIn0=
