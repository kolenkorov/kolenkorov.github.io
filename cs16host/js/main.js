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

	//Video
	let src = ['video/step_1.mp4', 'video/step_2.mp4', 'video/step_3.mp4', 'video/step_4.mp4']
	let section = document.querySelector('.server')
	let video = document.querySelector('.server__video video')
	let videoLink = document.querySelectorAll('.server__item')

	let flag = false
	document.addEventListener('scroll', function() {
		if(!flag && scrollY >= getCoords(section).top / 2) {
			video.play()
			flag = true;
		}
	});

	let i = 0;

	video.addEventListener('ended', function() {
		if(i < src.length-1) {
			i++	
			video.setAttribute('src', src[i])
			document.querySelector('.server__item.active').classList.remove('active')
			videoLink[i].classList.add('active')
			video.play()
		}
	});

	for (let i = 0; i < videoLink.length; i++) {
		videoLink[i].addEventListener("click", function() {
			video.pause()
			document.querySelector('.server__item.active').classList.remove('active')
			this.classList.add('active')

			video.setAttribute('src', src[i])
			video.play();
		});
	}

	//Why Us
	let tabsLink = document.querySelectorAll('.why-us__item')

	for(let i = 0; i <= tabsLink.length; i++) {
		tabsLink[i].addEventListener('click', function() {
			let itemId = this.getAttribute('data-link')

			document.querySelector('.why-us__item.active').classList.remove('active');
			document.querySelector('.why-us__slide.active').classList.remove('active');
			this.classList.add('active')
			
			document.querySelector('[data-tab="'+itemId+'"]').classList.add('active');
		});
	}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcblx0bGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKVxyXG5cdGxldCBpdGVtc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpO1xyXG5cdGxldCBmb290ZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3Rlcl9fbmF2LWl0ZW0gYScpO1xyXG5cdGxldCBmb290ZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19uYXYtaXRlbXMnKVxyXG5cdGxldCBoTWVudSA9IDEwMDtcclxuXHJcblxyXG5cdC8vTWVudVxyXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0bWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX25hdi1saW5rJykpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbGluayA9IGUudGFyZ2V0O1xyXG5cdFx0XHRzY3JvbGxUb0lkKGxpbmsuaGFzaCwgaE1lbnUpO1xyXG5cclxuXHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGluay5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Zm9vdGVyTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb3Rlcl9fbmF2LWxpbmsnKSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBsaW5rID0gZS50YXJnZXQ7XHJcblx0XHRcdHNjcm9sbFRvSWQobGluay5oYXNoLCBoTWVudSk7XHJcblxyXG5cdFx0XHRmb290ZXJOYXYucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fbmF2LWxpbmsuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vU2Nyb2xsXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZihzY3JvbGxZID4gNSkge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1x0XHJcblx0XHRsZXQgcG9zID0gd2luZG93LnNjcm9sbFk7XHJcblx0XHRcclxuXHRcdGZvcihsZXQgaSA9IGl0ZW1zTWVudS5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XHJcblx0XHRcdGxldCBsaW5rID0gaXRlbXNNZW51W2ldO1xyXG5cdFx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmhhc2gpXHJcblx0XHRcdFxyXG5cdFx0XHRpZihwb3MgPiAoKGdldENvb3JkcyhoZWFkZXIpLnRvcCkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMS43KSkpICB7XHJcblx0XHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly9WaWRlb1xyXG5cdGxldCBzcmMgPSBbJy92aWRlby9zdGVwXzEubXA0JywgJy92aWRlby9zdGVwXzIubXA0JywgJy92aWRlby9zdGVwXzMubXA0JywgJy92aWRlby9zdGVwXzQubXA0J11cclxuXHRsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2ZXInKVxyXG5cdGxldCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2ZXJfX3ZpZGVvIHZpZGVvJylcclxuXHRsZXQgdmlkZW9MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZlcl9faXRlbScpXHJcblxyXG5cdGxldCBmbGFnID0gZmFsc2VcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdGlmKCFmbGFnICYmIHNjcm9sbFkgPj0gZ2V0Q29vcmRzKHNlY3Rpb24pLnRvcCAvIDIpIHtcclxuXHRcdFx0dmlkZW8ucGxheSgpXHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgaSA9IDA7XHJcblxyXG5cdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZihpIDwgc3JjLmxlbmd0aC0xKSB7XHJcblx0XHRcdGkrK1x0XHJcblx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjW2ldKVxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmVyX19pdGVtLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdHZpZGVvTGlua1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0XHR2aWRlby5wbGF5KClcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2aWRlb0xpbmsubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZpZGVvTGlua1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZpZGVvLnBhdXNlKClcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZlcl9faXRlbS5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG5cdFx0XHR2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyY1tpXSlcclxuXHRcdFx0dmlkZW8ucGxheSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL1doeSBVc1xyXG5cdGxldCB0YWJzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aHktdXNfX2l0ZW0nKVxyXG5cclxuXHRmb3IobGV0IGkgPSAwOyBpIDw9IHRhYnNMaW5rLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR0YWJzTGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgaXRlbUlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpXHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2h5LXVzX19pdGVtLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2h5LXVzX19zbGlkZS5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0XHRcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFiPVwiJytpdGVtSWQrJ1wiXScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG4vKiBGdW5jdGlvbnMgKi8gXHJcbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XHJcblx0bGV0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0b3A6IGJveC50b3AgKyBzY3JvbGxZXHJcblx0fSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvSWQoaWQsIGgpe1xyXG5cdGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHJcblx0aWYodGFyZ2V0ICE9PSBudWxsKXtcclxuXHRcdGxldCBwb3MgPSBnZXRDb29yZHModGFyZ2V0KS50b3AgLSBoO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdHRvcDogcG9zLFxyXG5cdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUb0lkKGlkLCBoKXtcclxuXHRsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XHJcblxyXG5cdGlmKHRhcmdldCAhPT0gbnVsbCl7XHJcblx0XHRsZXQgcG9zID0gZ2V0Q29vcmRzKHRhcmdldCkudG9wIC0gaDtcclxuXHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHR0b3A6IHBvcyxcclxuXHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCJcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJmaWxlIjoibWFpbi5qcyJ9
