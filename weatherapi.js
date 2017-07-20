$(document).ready(function(){

	$("#submit-button").click(function(e){
		e.preventDefault();
		var zip = $("#zip").val();
		// console.log(zip);
		

		var cold = ["Brrr it's cold", "Shit, stay inside", "Cancel all your plans, it's way too cold out"];
		var warm = ["Great, it's warm out!", "Awww yeah, tank top weather!", "Flip flops, dude"];

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