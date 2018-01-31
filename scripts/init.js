$(document).ready(function() {
	$('#aboutLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('#textContainer').offset().top }, 1000);
	});
	
	$('#projectsLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('#projectsSection').offset().top }, 1000);
	});
	
	$('#contactLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('footer').offset().top }, 1000);
	});


	
	$('#button1').on('click', function() {
		window.open='http://www.protokite.tk';
	});

	$('#button2').on('click', function() {
		$("html, body").animate({ scrollTop: $('#textContainer').offset().top }, 1000);
	});

	$('#button3').on('click', function() {
		$("html, body").animate({ scrollTop: $('#textContainer').offset().top }, 1000);
	});

});



