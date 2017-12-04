$('#ledon-button').click(function() {
	$('#screen-text').text("This is text changed using jquery");
	console.log('yas');

    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/LEDon'
    });
});

