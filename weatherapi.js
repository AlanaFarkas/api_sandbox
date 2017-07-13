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
				console.log(data);
				// var location = (data.current_observation.observation_location.city);
				// var temp = (data.current_observation.temp_f);
				// $("body").append("<div id='climate'>The current temperature in " + location + " is " + temp + " degrees</div>");
				// if(temp >= 60) {
				// 	var rando = warm[Math.floor(Math.random() * warm.length)];
				// 	$("body").append(rando);
				// } else {
				// 	var rando = cold[Math.floor(Math.random() * warm.length)];
				// 	$("body").append(rando);
				// }
		   	}


		});	//.ajax

	 }); //.click

});