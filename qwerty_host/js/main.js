window.addEventListener('load', function(){
	let header = document.querySelector('.header')
	let burger = document.querySelector('.header__burger')
	let menu = document.querySelector('.header__nav')
	let itemsMenu = document.querySelectorAll('.header__nav-link');
	let footerMenu = document.querySelectorAll('.footer__nav-item a');
	let footerNav = document.querySelector('.footer__nav-items')
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

	//Copy
	document.querySelector('.code__copy').addEventListener('click', CopyToClipboard);
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

function CopyToClipboard() {
	let copyText = document.querySelector('.promocode');
	copyText.select();
	document.execCommand("copy");
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcblx0bGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKVxyXG5cdGxldCBpdGVtc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpO1xyXG5cdGxldCBmb290ZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3Rlcl9fbmF2LWl0ZW0gYScpO1xyXG5cdGxldCBmb290ZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19uYXYtaXRlbXMnKVxyXG5cdGxldCBoTWVudSA9IDEwMDtcclxuXHJcblxyXG5cdC8vTWVudVxyXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0bWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX25hdi1saW5rJykpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbGluayA9IGUudGFyZ2V0O1xyXG5cdFx0XHRzY3JvbGxUb0lkKGxpbmsuaGFzaCwgaE1lbnUpO1xyXG5cclxuXHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGluay5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Zm9vdGVyTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb3Rlcl9fbmF2LWxpbmsnKSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBsaW5rID0gZS50YXJnZXQ7XHJcblx0XHRcdHNjcm9sbFRvSWQobGluay5oYXNoLCBoTWVudSk7XHJcblxyXG5cdFx0XHRmb290ZXJOYXYucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fbmF2LWxpbmsuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vU2Nyb2xsXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZihzY3JvbGxZID4gNSkge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1x0XHJcblx0XHRsZXQgcG9zID0gd2luZG93LnNjcm9sbFk7XHJcblx0XHRcclxuXHRcdGZvcihsZXQgaSA9IGl0ZW1zTWVudS5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XHJcblx0XHRcdGxldCBsaW5rID0gaXRlbXNNZW51W2ldO1xyXG5cdFx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmhhc2gpXHJcblx0XHRcdFxyXG5cdFx0XHRpZihwb3MgPiAoKGdldENvb3JkcyhoZWFkZXIpLnRvcCkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMS43KSkpICB7XHJcblx0XHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly9Db3B5XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvZGVfX2NvcHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENvcHlUb0NsaXBib2FyZCk7XHJcbn0pO1xyXG5cclxuXHJcbi8qIEZ1bmN0aW9ucyAqLyBcclxuZnVuY3Rpb24gZ2V0Q29vcmRzKGVsZW0pIHtcclxuXHRsZXQgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHRvcDogYm94LnRvcCArIHNjcm9sbFlcclxuXHR9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG9JZChpZCwgaCl7XHJcblx0bGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xyXG5cclxuXHRpZih0YXJnZXQgIT09IG51bGwpe1xyXG5cdFx0bGV0IHBvcyA9IGdldENvb3Jkcyh0YXJnZXQpLnRvcCAtIGg7XHJcblxyXG5cdFx0d2luZG93LnNjcm9sbFRvKHtcclxuXHRcdFx0dG9wOiBwb3MsXHJcblx0XHRcdGJlaGF2aW9yOiBcInNtb290aFwiXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvSWQoaWQsIGgpe1xyXG5cdGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHJcblx0aWYodGFyZ2V0ICE9PSBudWxsKXtcclxuXHRcdGxldCBwb3MgPSBnZXRDb29yZHModGFyZ2V0KS50b3AgLSBoO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdHRvcDogcG9zLFxyXG5cdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb3B5VG9DbGlwYm9hcmQoKSB7XHJcblx0bGV0IGNvcHlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21vY29kZScpO1xyXG5cdGNvcHlUZXh0LnNlbGVjdCgpO1xyXG5cdGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxufSJdLCJmaWxlIjoibWFpbi5qcyJ9
