window.addEventListener('load', function(){
	let header = document.querySelector('.header')
	let burger = document.querySelector('.header__burger')
	let menu = document.querySelector('.header__nav')
	let itemsMenu = document.querySelectorAll('.header__nav-link')
	let footerMenu = document.querySelectorAll('.footer__nav-item a')
	let hMenu = 100
	let toggle_btn = document.querySelector('.advantages__toggle-button')
	let adv_block = document.querySelector('.advantages__block')

	//Menu
	burger.addEventListener('click', function(){
		this.classList.toggle('active');
		menu.classList.toggle('active');
		header.classList.toggle('active');
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
			
			if(pos > ((getCoords(header).top) - (window.innerHeight / 3)))  {
				menu.querySelector('.active').classList.remove('active')
				link.classList.add('active')
				break;
			}
		}
	});

	toggle_btn.addEventListener('click', function() {
	 	adv_block.classList.toggle('diactive');
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcblx0bGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKVxyXG5cdGxldCBpdGVtc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpXHJcblx0bGV0IGZvb3Rlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyX19uYXYtaXRlbSBhJylcclxuXHRsZXQgZm9vdGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fbmF2LWl0ZW1zJylcclxuXHRsZXQgaE1lbnUgPSAxMDBcclxuXHRsZXQgdG9nZ2xlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZhbnRhZ2VzX190b2dnbGUtYnV0dG9uJylcclxuXHRsZXQgYWR2X2Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkdmFudGFnZXNfX2Jsb2NrJylcclxuXHJcblxyXG5cdC8vTWVudVxyXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0bWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX25hdi1saW5rJykpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbGluayA9IGUudGFyZ2V0O1xyXG5cdFx0XHRzY3JvbGxUb0lkKGxpbmsuaGFzaCwgaE1lbnUpO1xyXG5cclxuXHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGluay5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Zm9vdGVyTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb3Rlcl9fbmF2LWxpbmsnKSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBsaW5rID0gZS50YXJnZXQ7XHJcblx0XHRcdHNjcm9sbFRvSWQobGluay5oYXNoLCBoTWVudSk7XHJcblxyXG5cdFx0XHRmb290ZXJOYXYucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fbmF2LWxpbmsuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vU2Nyb2xsXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZihzY3JvbGxZID4gNSkge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1x0XHJcblx0XHRsZXQgcG9zID0gd2luZG93LnNjcm9sbFk7XHJcblx0XHRcclxuXHRcdGZvcihsZXQgaSA9IGl0ZW1zTWVudS5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XHJcblx0XHRcdGxldCBsaW5rID0gaXRlbXNNZW51W2ldO1xyXG5cdFx0XHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rLmhhc2gpXHJcblx0XHRcdFxyXG5cdFx0XHRpZihwb3MgPiAoKGdldENvb3JkcyhoZWFkZXIpLnRvcCkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMS43KSkpICB7XHJcblx0XHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0dG9nZ2xlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCBcdGFkdl9ibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdkaWFjdGl2ZScpO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiBGdW5jdGlvbnMgKi8gXHJcbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XHJcblx0bGV0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0b3A6IGJveC50b3AgKyBzY3JvbGxZXHJcblx0fSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvSWQoaWQsIGgpe1xyXG5cdGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHJcblx0aWYodGFyZ2V0ICE9PSBudWxsKXtcclxuXHRcdGxldCBwb3MgPSBnZXRDb29yZHModGFyZ2V0KS50b3AgLSBoO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdHRvcDogcG9zLFxyXG5cdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUb0lkKGlkLCBoKXtcclxuXHRsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XHJcblxyXG5cdGlmKHRhcmdldCAhPT0gbnVsbCl7XHJcblx0XHRsZXQgcG9zID0gZ2V0Q29vcmRzKHRhcmdldCkudG9wIC0gaDtcclxuXHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHR0b3A6IHBvcyxcclxuXHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCJcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJmaWxlIjoibWFpbi5qcyJ9

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcblx0bGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpXHJcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKVxyXG5cdGxldCBpdGVtc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtbGluaycpXHJcblx0bGV0IGZvb3Rlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyX19uYXYtaXRlbSBhJylcclxuXHRsZXQgaE1lbnUgPSAxMDBcclxuXHRsZXQgdG9nZ2xlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZhbnRhZ2VzX190b2dnbGUtYnV0dG9uJylcclxuXHRsZXQgYWR2X2Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkdmFudGFnZXNfX2Jsb2NrJylcclxuXHJcblx0Ly9NZW51XHJcblx0YnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0aGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbmF2LWxpbmsnKSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBsaW5rID0gZS50YXJnZXQ7XHJcblx0XHRcdHNjcm9sbFRvSWQobGluay5oYXNoLCBoTWVudSk7XHJcblxyXG5cdFx0XHRtZW51LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi1saW5rLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly9TY3JvbGxcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHNjcm9sbFkgPiA1KSB7XHJcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XHRcclxuXHRcdGxldCBwb3MgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHRcdFxyXG5cdFx0Zm9yKGxldCBpID0gaXRlbXNNZW51Lmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcclxuXHRcdFx0bGV0IGxpbmsgPSBpdGVtc01lbnVbaV07XHJcblx0XHRcdGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmsuaGFzaClcclxuXHRcdFx0XHJcblx0XHRcdGlmKHBvcyA+ICgoZ2V0Q29vcmRzKGhlYWRlcikudG9wKSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAzKSkpICB7XHJcblx0XHRcdFx0bWVudS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0dG9nZ2xlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdCBcdGFkdl9ibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdkaWFjdGl2ZScpO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcblxyXG4vKiBGdW5jdGlvbnMgKi8gXHJcbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XHJcblx0bGV0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0b3A6IGJveC50b3AgKyBzY3JvbGxZXHJcblx0fSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvSWQoaWQsIGgpe1xyXG5cdGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHJcblx0aWYodGFyZ2V0ICE9PSBudWxsKXtcclxuXHRcdGxldCBwb3MgPSBnZXRDb29yZHModGFyZ2V0KS50b3AgLSBoO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdHRvcDogcG9zLFxyXG5cdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaUlpd2ljMjkxY21ObGN5STZXeUp0WVdsdUxtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW5kcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RzYjJGa0p5d2dablZ1WTNScGIyNG9LWHRjY2x4dVhIUnNaWFFnYUdWaFpHVnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbWhsWVdSbGNpY3BYSEpjYmx4MGJHVjBJR0oxY21kbGNpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NW9aV0ZrWlhKZlgySjFjbWRsY2ljcFhISmNibHgwYkdWMElHMWxiblVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YUdWaFpHVnlYMTl1WVhZbktWeHlYRzVjZEd4bGRDQnBkR1Z0YzAxbGJuVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1YUdWaFpHVnlYMTl1WVhZdGJHbHVheWNwWEhKY2JseDBiR1YwSUdadmIzUmxjazFsYm5VZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VabTl2ZEdWeVgxOXVZWFl0YVhSbGJTQmhKeWxjY2x4dVhIUnNaWFFnWm05dmRHVnlUbUYySUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1admIzUmxjbDlmYm1GMkxXbDBaVzF6SnlsY2NseHVYSFJzWlhRZ2FFMWxiblVnUFNBeE1EQmNjbHh1WEhSc1pYUWdkRzluWjJ4bFgySjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVoWkhaaGJuUmhaMlZ6WDE5MGIyZG5iR1V0WW5WMGRHOXVKeWxjY2x4dVhIUnNaWFFnWVdSMlgySnNiMk5ySUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1Ga2RtRnVkR0ZuWlhOZlgySnNiMk5ySnlsY2NseHVYSEpjYmx4eVhHNWNkQzh2VFdWdWRWeHlYRzVjZEdKMWNtZGxjaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVLQ2w3WEhKY2JseDBYSFIwYUdsekxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MGJXVnVkUzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkR2hsWVdSbGNpNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZGhZM1JwZG1VbktUdGNjbHh1WEhSOUtUdGNjbHh1WEhKY2JseDBiV1Z1ZFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1S0dVcGUxeHlYRzVjZEZ4MGFXWW9aUzUwWVhKblpYUXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2RvWldGa1pYSmZYMjVoZGkxc2FXNXJKeWtwZTF4eVhHNWNkRngwWEhSbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNibHgwWEhSY2RGeHlYRzVjZEZ4MFhIUnNaWFFnYkdsdWF5QTlJR1V1ZEdGeVoyVjBPMXh5WEc1Y2RGeDBYSFJ6WTNKdmJHeFViMGxrS0d4cGJtc3VhR0Z6YUN3Z2FFMWxiblVwTzF4eVhHNWNjbHh1WEhSY2RGeDBiV1Z1ZFM1eGRXVnllVk5sYkdWamRHOXlLQ2N1YUdWaFpHVnlYMTl1WVhZdGJHbHVheTVoWTNScGRtVW5LUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwYkdsdWF5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEgxY2NseHVYSFI5S1R0Y2NseHVYSEpjYmx4MFptOXZkR1Z5VG1GMkxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z1puVnVZM1JwYjI0b1pTbDdYSEpjYmx4MFhIUnBaaWhsTG5SaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJadmIzUmxjbDlmYm1GMkxXeHBibXNuS1NsN1hISmNibHgwWEhSY2RHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1WEhSY2RGeDBYSEpjYmx4MFhIUmNkR3hsZENCc2FXNXJJRDBnWlM1MFlYSm5aWFE3WEhKY2JseDBYSFJjZEhOamNtOXNiRlJ2U1dRb2JHbHVheTVvWVhOb0xDQm9UV1Z1ZFNrN1hISmNibHh5WEc1Y2RGeDBYSFJtYjI5MFpYSk9ZWFl1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbVp2YjNSbGNsOWZibUYyTFd4cGJtc3VZV04wYVhabEp5a3VZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkR3hwYm1zdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFI5WEhKY2JseDBmU2s3WEhKY2JseHlYRzVjZEM4dlUyTnliMnhzWEhKY2JseDBaRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jMk55YjJ4c0p5d2dablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJwWmloelkzSnZiR3haSUQ0Z05Ta2dlMXh5WEc1Y2RGeDBYSFJvWldGa1pYSXVZMnhoYzNOTWFYTjBMbUZrWkNnbmMzUnBZMnQ1SnlrN1hISmNibHgwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSb1pXRmtaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYzNScFkydDVKeWs3WEhKY2JseDBYSFI5WEhKY2JseDBmU2s3WEhKY2JseDBYSEpjYmx4MFpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmMyTnliMnhzSnl3Z1puVnVZM1JwYjI0b1pTa2dlMXgwWEhKY2JseDBYSFJzWlhRZ2NHOXpJRDBnZDJsdVpHOTNMbk5qY205c2JGazdYSEpjYmx4MFhIUmNjbHh1WEhSY2RHWnZjaWhzWlhRZ2FTQTlJR2wwWlcxelRXVnVkUzVzWlc1bmRHZ3RNVHNnYVQ0OU1Ec2dhUzB0S1NCN1hISmNibHgwWEhSY2RHeGxkQ0JzYVc1cklEMGdhWFJsYlhOTlpXNTFXMmxkTzF4eVhHNWNkRngwWEhSc1pYUWdhR1ZoWkdWeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loc2FXNXJMbWhoYzJncFhISmNibHgwWEhSY2RGeHlYRzVjZEZ4MFhIUnBaaWh3YjNNZ1BpQW9LR2RsZEVOdmIzSmtjeWhvWldGa1pYSXBMblJ2Y0NrZ0xTQW9kMmx1Wkc5M0xtbHVibVZ5U0dWcFoyaDBJQzhnTVM0M0tTa3BJQ0I3WEhKY2JseDBYSFJjZEZ4MGJXVnVkUzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VZV04wYVhabEp5a3VZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5bGNjbHh1WEhSY2RGeDBYSFJzYVc1ckxtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwWEhKY2JseDBYSFJjZEZ4MFluSmxZV3M3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgxY2NseHVYSFI5S1R0Y2NseHVYSEpjYmx4MGRHOW5aMnhsWDJKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2RDQmNkR0ZrZGw5aWJHOWpheTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RrYVdGamRHbDJaU2NwTzF4eVhHNWNkSDBwTzF4eVhHNTlLVHRjY2x4dVhISmNibHh5WEc0dktpQkdkVzVqZEdsdmJuTWdLaThnWEhKY2JtWjFibU4wYVc5dUlHZGxkRU52YjNKa2N5aGxiR1Z0S1NCN1hISmNibHgwYkdWMElHSnZlQ0E5SUdWc1pXMHVaMlYwUW05MWJtUnBibWREYkdsbGJuUlNaV04wS0NrN1hISmNibHh5WEc1Y2RISmxkSFZ5YmlCN1hISmNibHgwWEhSMGIzQTZJR0p2ZUM1MGIzQWdLeUJ6WTNKdmJHeFpYSEpjYmx4MGZTQWdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhOamNtOXNiRlJ2U1dRb2FXUXNJR2dwZTF4eVhHNWNkR3hsZENCMFlYSm5aWFFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLR2xrS1R0Y2NseHVYSEpjYmx4MGFXWW9kR0Z5WjJWMElDRTlQU0J1ZFd4c0tYdGNjbHh1WEhSY2RHeGxkQ0J3YjNNZ1BTQm5aWFJEYjI5eVpITW9kR0Z5WjJWMEtTNTBiM0FnTFNCb08xeHlYRzVjY2x4dVhIUmNkSGRwYm1SdmR5NXpZM0p2Ykd4VWJ5aDdYSEpjYmx4MFhIUmNkSFJ2Y0RvZ2NHOXpMRnh5WEc1Y2RGeDBYSFJpWldoaGRtbHZjam9nWENKemJXOXZkR2hjSWx4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnpZM0p2Ykd4VWIwbGtLR2xrTENCb0tYdGNjbHh1WEhSc1pYUWdkR0Z5WjJWMElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2locFpDazdYSEpjYmx4eVhHNWNkR2xtS0hSaGNtZGxkQ0FoUFQwZ2JuVnNiQ2w3WEhKY2JseDBYSFJzWlhRZ2NHOXpJRDBnWjJWMFEyOXZjbVJ6S0hSaGNtZGxkQ2t1ZEc5d0lDMGdhRHRjY2x4dVhISmNibHgwWEhSM2FXNWtiM2N1YzJOeWIyeHNWRzhvZTF4eVhHNWNkRngwWEhSMGIzQTZJSEJ2Y3l4Y2NseHVYSFJjZEZ4MFltVm9ZWFpwYjNJNklGd2ljMjF2YjNSb1hDSmNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1ZlNKZExDSm1hV3hsSWpvaWJXRnBiaTVxY3lKOVxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==