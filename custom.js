$(document).ready(function() {

	$('.addClass button').click(function() {
		$('.addClass p').addClass('red');
	});

	$('.after button').click(function() {
		$('.after p').after('You added code after!')
	});

	$('.append button').click(function() {
		$('.append p').append('Appended text!');
	});

	$('.attr button').click(function() {
		$('.attr p').attr();
	});

	$('.before button').click(function() {
		$('.before p').before('You added code before!');
	});

	$('.html button').click(function() {
		$('.html p').html("<h1>You changed the HTML code!</h1>");
	});

	$('.text button').click(function() {
		$('.text p').html("You changed the text!");
	});

	$('.toggle button').click(function() {
		$('.toggle p').toggle();
	});

	$('.hideIt button').click(function() {
		$('.hideIt p').hide();
	});

	$('.showIt h6').hide();

	$('.showIt button').click(function() {
		$('.showIt h6').show();
	});																

	$('.slide-down h6').hide();

	$('.slide-down button').click(function() {
		$('.slide-down h6').slideDown();
	});

	$('.slide-toggle h6').hide();

	$('.slide-toggle button').click(function() {
		$('.slide-toggle h6').slideToggle();
	});

	$('.slide-up button').click(function() {
		$('.slide-up h6').slideUp();
	});

	$('.fade-out button').click(function() {
		$('.fade-out h6').fadeOut();
	});

	$('.fade-in h6').hide();

	$('.fade-in button').click(function() {
		$('.fade-in h6').fadeIn();
	});

	$('.focus textarea').focus(function() {
		$('.focus p').addClass('backYellow');
	})

	$('.click button').click(function() {
		alert("I don't care what anyone said about you. You are special!");
	});
});