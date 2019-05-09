//scroll

$(window).on('load resize', scrollBar);
$(window).on('load resize', scrollBar_2);

function scrollBar(){
	if($(window).width() < 768){
		$('.tab-cover__content, .cards, .scroll, .tbody, .spread-popup__content, .assessments-cover, .text-cover').mCustomScrollbar("destroy");
		$('.diagram-tree').mCustomScrollbar('destroy');
	}

	else{
		$('.tab-cover__content, .cards, .scroll, .tbody, .spread-popup__content, .assessments-cover, .text-cover').mCustomScrollbar({
			theme: "dark",
			scrollInertia: 350,
			contentTouchScroll: false,
		});

		$('.diagram-tree').mCustomScrollbar({
			axis: "yx",
			theme: "dark",
			scrollInertia: 350,
			contentTouchScroll: false,
			scrollbarPosition:"outside"
		});
	}
}

function scrollBar_2(){
	if($(window).width() < 576){
		$('.permissions-groups').mCustomScrollbar('destroy');
	}

	else{
		$('.permissions-groups').mCustomScrollbar({
			theme: "dark",
			scrollInertia: 350,
			contentTouchScroll: false,
		});
	}
}

//COMMON JS

//header
let header = $('.header');
let header_icon = $('.header__icon');
let header_title = $('.header__title-item');
let open_switch = $('.header__left-icon');
let popup_switch = $('.popup-switch')

//color
let blue = $('.header__gamma-simulation')
let red = $('.header__gamma-state')

//feed
let feed = $('.feed');
let title_feed = $('.title-feed');
let close_feed = $('.feed-header__icon');
let feed_icon = $('.bell');

//event
let create_event = $('.create-event');
let title_event = $('.title-event');
let close_event = $('.event-header__icon');
let overlay = $('.overlay');
let close_icon = $('.cross');
let add = $('.add');
let cancelation = $('.cancelation');

//permissions
let permissions = $('.permissions');
let permissions_open = $('.popup-switch .link');
let permissions_close = $('.permissions-header__icon')

//cards
let card = $('.card');

//open feed

feed_icon.on('click', function(){
	feed.addClass('feed-active');
});

//close feed
close_feed.on('click', function(){
	feed.removeClass('feed-active');
});

//open create event

add.on('click', function(){
	create_event.addClass('create-event-active');
	overlay.addClass('overlay-active');

});

//close create event
close_event.on('click', function(){
	create_event.removeClass('create-event-active');
	overlay.removeClass('overlay-active');
});

//permissions open
permissions_open.on('click', function(e){
	e.preventDefault();
	permissions.show();
});

//permissions close
permissions_close.on('click', function(){
	permissions.hide();
});


//Activation color red

blue.on('click', function(){
	$(this).removeClass('blue_no-active');
	red.removeClass('red-active');

	$('body').removeAttr('id', 'red_theme');
	$('body').attr('id', 'blue_theme');
});

red.on('click', function(){
	$(this).addClass('red-active');
	blue.removeClass('blue-active');
	blue.addClass('blue_no-active');

	$('body').removeAttr('id', 'blue_theme');
	$('body').attr('id', 'red_theme');
});

cancelation.on('click', function(e){
	e.preventDefault();
	create_event.removeClass('create-event-active');
	overlay.removeClass('overlay-active');
});

open_switch.on('click', function(){
	popup_switch.show();
});

$(document).mouseup(function(e)
	{

	// if the target of the click isn't the container nor a descendant of the container

	if (popup_switch.is(":visible")){
		if (!popup_switch.is(e.target) && popup_switch.has(e.target).length === 0)
		{
			popup_switch.hide();
		}
	}
});

$('#light').on('click', function(){
	$('body').addClass('light_theme');
});

$('#dark').on('click', function(){
	$('body').removeClass('light_theme');
});

card.on('click', function(){
	card.removeClass('card-active');
	$(this).toggleClass('card-active');
});

$('.feed-close').on('click', function(){
	feed.addClass('feed-collapsed');
	$('.feed-panel').addClass('feed-panel__active');
});

$('.feed-panel').on('click', function(){
	$(this).removeClass('feed-panel__active');
	feed.removeClass('feed-collapsed');
});



//SINGLE EVENT

let info = $('.info');
let close_info = $('.info-header__icon');
let open_info = $('.open-info');
let single_event = $('.single-event__event');
let mission = $('.single-event__mission');
let head = $('.single-event__head');
let thead = $('.thead');
let evaluation = $('.evaluation-description');
let spread = $('.spread-popup');
let spread_close = $('.spread-heading__icon, .spread-popup__close');

let diagram = $('.diagram');
let diagram_open = $('.top-bar__hierarchy a');
let diagram_close = $('.diagram-header__icon');

let style = $('.diagram-style');
let style_open = $('.mode-link a');
let style_close = $('.diagram-style__close');
let style_item = $('.diagram-style__item');


open_info.on('click', function(){
	info.addClass('info-active');
});

close_info.on('click', function(){
	info.removeClass('info-active');
});

single_event.on('click', function(){
	if($(window).width() < 768){
		thead.toggle();
		head.toggle();
	}

	$(this).toggleClass('open-mission');


	let content = $(this).next();
	$('.single-event__mission:visible').not(content).slideUp(400);
	content.slideToggle(400);

	$('.toolbar').toggleClass('toolbar-active');
});

evaluation.on('click', function(){
	$('.evaluation-content').slideToggle(400);
	$('.evaluation-description i').toggleClass('active');
});

$('.add-assessment').on('click', function(){
	spread.show();
	overlay.show();
});

spread_close.on('click', function(){
	spread.hide();
	overlay.hide();
});

diagram_open.on('click', function(e){
	e.preventDefault();
	diagram.show();
});

diagram_close.on('click', function(){
	diagram.hide();
});

style_open.on('click', function(){
	style.show();
});

style_close.on('click', function(){
	style.hide();
});

style_item.on('click', function(){
	style_item.removeClass('item-active');
	$(this).addClass('item-active');
});

$('.diagram-style__item.active').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.active').addClass('item-active');
});

$('.diagram-style__item.accentuated').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.accentuated').addClass('item-active');
});

$('.diagram-style__item.suspended').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.suspended').addClass('item-active');
});

$('.diagram-style__item.future').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.future').addClass('item-active');
});

$('.diagram-style__item.not-active').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.not-active').addClass('item-active');
});

$('.diagram-style__item.opening').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.opening').addClass('item-active');
});

$('.diagram-style__item.closed').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.closed').addClass('item-active');
});

$('.diagram-style__item.closure').on('click', function(){
	$('.diagram-tree__wrap').removeClass('item-active');
	$('.diagram-tree__wrap.closure').addClass('item-active');
});


$('.first').hover(function(){
	$(this).parents('.tbody').toggleClass('hover');
});