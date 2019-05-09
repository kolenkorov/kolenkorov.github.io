$(document).ready(function() {
	$("#form-0").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-0.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form-0").trigger("reset");
		});
		return false;
	});
	
	$("#form-1").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-1.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form-1").trigger("reset");
		});
		return false;
	});
	
	$("#form-2").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-2.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form-2").trigger("reset");
		});
		return false;
	});
	
	$("#form-3").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-3.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form-3").trigger("reset");
		});
		return false;
	});
	
	$("#form-4").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-4.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form-4").trigger("reset");
		});
		return false;
	});
	
	$("#form-5").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-5.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form-5").trigger("reset");
		});
		return false;
	});
	
});