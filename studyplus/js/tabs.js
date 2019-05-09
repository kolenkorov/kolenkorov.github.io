$('#tab').easyResponsiveTabs({
	type: 'vertical',
	width: 'auto', 
	fit: true,
	closed: 'accordion', 
	tabidentify: 'hor_1', 
	inactive_bg: !1,
	active_border_color: !1,
	active_content_border_color: !1,
	activate: function(event) { 
		var $tab = $(this);
		var $info = $('#nested-tabInfo2');
		var $name = $('span', $info);
		$name.text($tab.text());
		$info.show();
	}
});