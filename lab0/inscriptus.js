$(function() {
	console.log('Ayyy TAs in the hoooouuuuuse');

	var animationLength = 1200;
	var animationSettings = {opacity: 1}

	//start animation block
	$('#sexy-name').animate(animationSettings,animationLength, function(){
		$('#content1').animate(animationSettings,animationLength, function() {
			$('#content2').animate(animationSettings,animationLength, function() {
				console.log('there\'s probably a library for this...');
			});
		});
	}); //end animation block


});