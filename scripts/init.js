$(document).ready(function() {

	this.message = 'Hi, I\'m Ana. I\'m a Front End Developer. Scroll down to see my work.';

	var delay = 0;
	for(var i = 0; i < this.message.length; i++){
		var root = this;
		setTimeout(function(j){
			$('.dynamicMessage').append(root.message[j]);
		}.bind(this, i), delay);

		if(this.message[i] == ',')
			delay += 150;
		else if(this.message[i] == '.')
			delay += 200;
		else
			delay += 70;
};

	$('#aboutLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('#aboutSection').offset().top }, 1000);
	});
	
	$('#projectsLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('#projectsSection').offset().top }, 1000);
	});
	
	$('#contactLink').on('click', function() {
		$("html, body").animate({ scrollTop: $('footer').offset().top }, 1000);
	});

	$('#arrow').on('click', function() {
		$("html, body").animate({ scrollTop: $('#servicesSection').offset().top }, 1000);
	});
	

	$(window).scroll(function() {
		$('#magicIcon').each(function(){
			var imagePos = $(this).offset().top;
					
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("fadeIn");
							}
			});
	});

	$(window).scroll(function() {
		$('#cubesIcon').each(function(){
			var imagePos = $(this).offset().top;
					
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("fadeIn");
							}
			});
	});

	$(window).scroll(function() {
		$('#cogsIcon').each(function(){
			var imagePos = $(this).offset().top;
					
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("fadeIn");
							}
			});
	});

});



