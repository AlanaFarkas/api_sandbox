$(document).ready(function(){

	$("#submit-button, #submit-button-select").click(function(e){
		e.preventDefault();
		var zip = $("#zip-input").val();
		console.log(zip);


		// var select = $("#zip-select option:selected").val()
		// console.log(select);

		var str = "";
  		$("select option:selected").each(function () {
        	str += $(this).text() + " ";
        	console.log(str);
      	});


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