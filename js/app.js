$(document).ready(function() {
	

	// Get location from browser
	navigator.geolocation.getCurrentPosition(function(position) {

		var first = document.getElementById("first");
			temperature = document.getElementById("temperature");
			icon = document.getElementById("icon");

		var request_location = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

		var location = $.get(request_location, function(data) {
			first.innerHTML = data.name;
			temperature.innerHTML = data.main.temp + "&#8451";
			state.innerHTML = data.weather[0].main;
			icon.src = data.weather[0].icon;

			console.log(data);	
		});
	});
});

