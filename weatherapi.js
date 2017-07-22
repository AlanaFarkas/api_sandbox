$(document).ready(function(){

	$("#submit-button").click(function(e){
		e.preventDefault();
		var zip = $("#zip").val();
		var dropdown = $("#dropdown").val();









		console.log(dropdown);

		$.ajax({
			url: "http://api.wunderground.com/api/09f8aa654d3c3800/conditions/q/" + zip +".json",
			dataType: 'json',
			method: 'get',
			cache: true,
				success: function(data){
				var zip = data.current_observation.observation_location.full;
				console.log(zip);

				$("body").append("<div class='zip'>" + zip + "</div>");
		   	}


		});	//.ajax

	 }); //.click

});