
	$(window).on('load', function () { 
		   if ($('#preloader').length) {  
			$('#preloader').delay(800).fadeOut('slow', function () {  
			    $(this).remove();     
			 }); 
   }});


	$('#btn1').click(function() {

		$.ajax({
			url: "libs/php/populatedPlaces.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat:$('#lat').val(),
				lng: $('#long').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#city').html(result['data'][0]['toponymName']);
					$('#country').html(result['data'][0]['countryName']);			
	
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		}); 
	

	});

	$('#btn2').click(function() {

		$.ajax({
			url: "libs/php/wikipediaEntries.php",
			type: 'POST',
			dataType: 'json',
			data: {
			postalcode: $('#post').val(),
			country: $('#Country').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#summary').html(result['data'][0]['summary']);
					$('#title').html(result['data'][0]['title']);
					$('#url').html(result['data'][0]['wikipediaUrl']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		}); 
	

	});

	$('#btn3').click(function() {

		$.ajax({
			url: "libs/php/placesToVisit.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('.country2:checked').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#one').html(result['data'][0]['name']);
					$('#two').html(result['data'][1]['name']);
					$('#three').html(result['data'][2]['name']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		}); 
	

	});