(function($){
	$(document).ready(function(){
		$(".slider_tab-2").each(function(){
			var insert_val=$(this).closest(".slider_2").find(".slider-2_input_val");
			
			var curr_slide=$(this).slider({
				min:parseInt($(this).attr("data-min")),
				max:parseInt($(this).attr("data-max")),
				step:parseFloat($(this).attr("data-step")),
				value:parseInt($(this).attr("data-val")),
				stop: function(event, ui) {
					insert_val.val(curr_slide.slider("value"));
					//calc(); можно подключить функцию обработки/расчета если надо
				},
				slide: function(event, ui){
					setTimeout(function(){
						insert_val.val(curr_slide.slider("value"));
						//calc(); можно подключить функцию обработки/расчета если надо
					},30);
				}
			});
			
			insert_val.on("change",function(){
				var this_val=$(this).val();
				
				var tmp_1=curr_slide.slider("value");
				var tmp_2=this_val;
			
				if(tmp_1!=tmp_2){
					curr_slide.slider("value",tmp_2);
					//calc(); можно подключить функцию обработки/расчета если надо
				}
			});
			
			insert_val.val($(this).attr("data-val")).trigger("change");
			
		});
	});
})(jQuery);