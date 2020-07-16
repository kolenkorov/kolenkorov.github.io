/* Slider */
	$('.main__slider').owlCarousel({
		loop: true,
		items: 1,
	    margin: 0,
	    false: true,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 10000,
	    autoplaySpeed: 1000,
	    animateIn: 'fadeIn'
	});
/* Slider end */


  let body = $('body'),
      startX_1 = 90,
      startY_1 = 90,
      startX_2 = -40,
      startY_2 = -50,
      startX_3 = -20,
      startY_3 = 20,
      column_1 = $('.column_1'),
      column_2 = $('.column_2'),
      column_3 = $('.column_3'),
      w = body.width(),
      h = body.height();

	body.on('mousemove', function(evt) {
	    let posX_1 = Math.round(evt.clientX / w * startX_1);
	    let posY_1 = Math.round(evt.clientY / h * startY_1);
	    let posX_2 = Math.round(evt.clientX / w * startX_2);
	    let posY_2 = Math.round(evt.clientY / h * startY_2);
	    let posX_3 = Math.round(evt.clientX / w * startX_3);
	    let posY_3 = Math.round(evt.clientY / h * startY_3);
    	column_1.css("transform", 'translate('+ posX_1 + 'px,' + posY_1 + 'px)');
    	column_2.css("transform", 'translate('+ posX_2 + 'px,' + posY_2 + 'px)');
    	column_3.css("transform", 'translate('+ posX_3 + 'px,' + posY_3 + 'px)');
  });


$('.main__button a').on('mouseover', function() {
	$('.column_4, .column_7').css('transform', 'scale(1.2)');
	$('.column_5, .column_6').css('transform', 'scale(0.8)');
});

$('.main__button a').on('mouseout', function() {
	$('.column_4, .column_7, .column_5, .column_6').css('transform', 'scale(1)');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFNsaWRlciAqL1xyXG5cdCQoJy5tYWluX19zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0aXRlbXM6IDEsXHJcblx0ICAgIG1hcmdpbjogMCxcclxuXHQgICAgZmFsc2U6IHRydWUsXHJcblx0ICAgIGRvdHM6IGZhbHNlLFxyXG5cdCAgICBhdXRvcGxheTogdHJ1ZSxcclxuXHQgICAgYXV0b3BsYXlUaW1lb3V0OiAxMDAwMCxcclxuXHQgICAgYXV0b3BsYXlTcGVlZDogMTAwMCxcclxuXHQgICAgYW5pbWF0ZUluOiAnZmFkZUluJ1xyXG5cdH0pO1xyXG4vKiBTbGlkZXIgZW5kICovXHJcblxyXG5cclxuICBsZXQgYm9keSA9ICQoJ2JvZHknKSxcclxuICAgICAgc3RhcnRYXzEgPSA5MCxcclxuICAgICAgc3RhcnRZXzEgPSA5MCxcclxuICAgICAgc3RhcnRYXzIgPSAtNDAsXHJcbiAgICAgIHN0YXJ0WV8yID0gLTUwLFxyXG4gICAgICBzdGFydFhfMyA9IC0yMCxcclxuICAgICAgc3RhcnRZXzMgPSAyMCxcclxuICAgICAgY29sdW1uXzEgPSAkKCcuY29sdW1uXzEnKSxcclxuICAgICAgY29sdW1uXzIgPSAkKCcuY29sdW1uXzInKSxcclxuICAgICAgY29sdW1uXzMgPSAkKCcuY29sdW1uXzMnKSxcclxuICAgICAgdyA9IGJvZHkud2lkdGgoKSxcclxuICAgICAgaCA9IGJvZHkuaGVpZ2h0KCk7XHJcblxyXG5cdGJvZHkub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdCAgICBsZXQgcG9zWF8xID0gTWF0aC5yb3VuZChldnQuY2xpZW50WCAvIHcgKiBzdGFydFhfMSk7XHJcblx0ICAgIGxldCBwb3NZXzEgPSBNYXRoLnJvdW5kKGV2dC5jbGllbnRZIC8gaCAqIHN0YXJ0WV8xKTtcclxuXHQgICAgbGV0IHBvc1hfMiA9IE1hdGgucm91bmQoZXZ0LmNsaWVudFggLyB3ICogc3RhcnRYXzIpO1xyXG5cdCAgICBsZXQgcG9zWV8yID0gTWF0aC5yb3VuZChldnQuY2xpZW50WSAvIGggKiBzdGFydFlfMik7XHJcblx0ICAgIGxldCBwb3NYXzMgPSBNYXRoLnJvdW5kKGV2dC5jbGllbnRYIC8gdyAqIHN0YXJ0WF8zKTtcclxuXHQgICAgbGV0IHBvc1lfMyA9IE1hdGgucm91bmQoZXZ0LmNsaWVudFkgLyBoICogc3RhcnRZXzMpO1xyXG4gICAgXHRjb2x1bW5fMS5jc3MoXCJ0cmFuc2Zvcm1cIiwgJ3RyYW5zbGF0ZSgnKyBwb3NYXzEgKyAncHgsJyArIHBvc1lfMSArICdweCknKTtcclxuICAgIFx0Y29sdW1uXzIuY3NzKFwidHJhbnNmb3JtXCIsICd0cmFuc2xhdGUoJysgcG9zWF8yICsgJ3B4LCcgKyBwb3NZXzIgKyAncHgpJyk7XHJcbiAgICBcdGNvbHVtbl8zLmNzcyhcInRyYW5zZm9ybVwiLCAndHJhbnNsYXRlKCcrIHBvc1hfMyArICdweCwnICsgcG9zWV8zICsgJ3B4KScpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiQoJy5tYWluX19idXR0b24gYScpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuY29sdW1uXzQsIC5jb2x1bW5fNycpLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlKDEuMiknKTtcclxuXHQkKCcuY29sdW1uXzUsIC5jb2x1bW5fNicpLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlKDAuOCknKTtcclxufSk7XHJcblxyXG4kKCcubWFpbl9fYnV0dG9uIGEnKS5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcclxuXHQkKCcuY29sdW1uXzQsIC5jb2x1bW5fNywgLmNvbHVtbl81LCAuY29sdW1uXzYnKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgxKScpO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
