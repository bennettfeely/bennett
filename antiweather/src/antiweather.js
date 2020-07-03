console.log("v3");

// Anyone using this code on their own please feel free!
// But please have the courtesy to register your own API keys (there's two)
// Thank you!
var dark_sky_api_key = "e6c964e768708278b2dd1e5393296b2e";

// Let's get this party started
document.addEventListener("DOMContentLoaded", init, false);

function init() {
	// If the URL has a specific parameter, we'll use that
	var query_string = _getUrlParameter("units-toggle");
	if (query_string == "us" || query_string == "si") {
		document.querySelector('[value="' + query_string + '"]').checked = true;
		var unit = query_string;
	} else {
		// If the URL has no query string, see if we have localstorage saved
		var stored_unit = store.get("antiweather-units");
		if (stored_unit !== null) {
			document.querySelector(
				'[value="' + stored_unit + '"]'
			).checked = true;
		}
	}

	// Pre-setup map backgrounds set on the 'burgh, of course
	setupMap("home", 40.4406, -79.9959);
	setupMap("away", -40.4406, 100.0041);

	// Let's start up the search input
	getLocation();

	// Add change listeners to unit toggles
	document.querySelector("#c_toggle").addEventListener("change", changeUnits);
	document.querySelector("#f_toggle").addEventListener("change", changeUnits);
}

// Handle any changes to the unit toggles
function changeUnits() {
	// Store the unit in localstorage for future visits
	var unit = document.querySelector('[name="units-toggle"]:checked').value;
	store("antiweather-units", unit);

	// We want to reload the weather data if we've already got it in different units
	var home_lng = document.querySelector(".home").getAttribute("data-lng");
	var home_lat = document.querySelector(".home").getAttribute("data-lat");
	var away_lng = document.querySelector(".away").getAttribute("data-lng");
	var away_lat = document.querySelector(".away").getAttribute("data-lat");

	if (
		home_lng !== null &&
		home_lat !== null &&
		away_lng !== null &&
		away_lat !== null
	) {
		getWeather("home", parseInt(home_lat), parseInt(home_lng));
		getWeather("away", parseInt(away_lat), parseInt(away_lng));
	}
}

// Get the location of the user using Google Places API
function getLocation() {
	console.log("getLocation();");
	var search = document.getElementById("search");
	var autocomplete = new google.maps.places.Autocomplete(search, {
		types: ["(cities)"],
		placeIdOnly: true,
	});

	var geocoder = new google.maps.Geocoder();

	// When a item from the dropdown is selected, get the coordinates
	autocomplete.addListener("place_changed", function () {
		var place = autocomplete.getPlace();

		console.log("place");
		console.log(place);

		// Google makes things complicated as usual, now we will geocode the result
		geocoder.geocode({ placeId: place.place_id }, function (
			results,
			status
		) {
			console.log(results);
			console.log(status);
			if (status !== "OK") {
				// Something went terribly wrong
				console.log("Geocoder failed due to: " + status);
			} else {
				// Get the lat/lng coords and start te search
				var lat = results[0].geometry.location.lat();
				var lng = results[0].geometry.location.lng();
				initSearch(lat, lng);

				// Get the name of the home location and set it on the card
				setLocation("home", place.name);
			}
		});
	});
}

// Get antipodes and start search
function initSearch(lat, lng) {
	// Hopefully hide the keyboard on mobile
	document.querySelector("#search").click();

	// Convert coords to antipodal coords
	var a_lat = lat * -1;
	var a_lng = lng * -1;
	if (a_lng > 0) {
		var a_lng = -(a_lng - 180);
	} else {
		var a_lng = -(a_lng + 180);
	}

	// Get the weather
	getWeather("home", lat, lng);
	getWeather("away", a_lat, a_lng);
}

// Get the placename with the Google Reverse Geocoding API
// function getPlacename(location, lat, lng) {
// 	// Format coords into object Google likes
// 	var lat_lng = { lat: lat, lng: lng };

// 	console.log(location);
// 	console.log(lat + ", " + lng);

// 	var geocoder = new google.maps.Geocoder();
// 	geocoder.geocode({ location: lat_lng }, function (results, status) {
// 		if (status === "OK") {
// 			if (results[0]) {
// 				setLocation(location, results[0].formatted_address);
// 			} else {
// 				// We still don't have a result, must be in the middle of the ocean
// 				setLocation(location, "Middle of Nowhere");
// 			}
// 		} else if (status == "ZERO_RESULTS") {
// 			// We don't have a result, must be in the middle of the ocean
// 			setLocation(location, "Middle of Nowhere");
// 		} else {
// 			// Something went terribly wrong
// 			setLocation(location, "Somewhere");
// 			console.log("Geocoder failed due to: " + status);
// 		}
// 	});
// }

// Because there's several ways of getting a location name and three places to put it, this fills in everything for a given location
function setLocation(location, place_name) {
	fill(location, "location", place_name);
	fill("quick-" + location, "quick-location", place_name);

	// Fill the forecast heading, adding grammatically correct `the` when commonly necessary
	if (
		place_name == "Middle of Nowhere" ||
		place_name == "North Pole" ||
		place_name == "South Pole"
	) {
		fill(location, "forecast-heading", "Forecast for the " + place_name);
	} else if (place_name == "Pittsburgh") {
		fill(
			location,
			"forecast-heading",
			"Forecast for the City of Champions"
		);
	} else {
		fill(location, "forecast-heading", "Forecast for " + place_name);
	}
}

// Get weather forecast for specific lat/lng on earth using the Dark Sky API
function getWeather(location, lat, lng, pre_placename) {
	// Remove `.has-weather` class
	document.querySelector("." + location).classList.remove("has-weather");
	document.querySelector(".quick-wrapper").classList.remove("has-weather");

	// Add loading indicator classes
	document.querySelector("html").classList.add("is-loading");
	document
		.querySelector("." + location)
		.classList.add("is-loading-" + location);

	// Set data-lat/data-lng attributes in case user changes units and we need to reinitiate search
	document.querySelector("." + location).setAttribute("data-lat", lat);
	document.querySelector("." + location).setAttribute("data-lng", lng);

	// Send request to Dark Sky
	var unit = document.querySelector('[name="units-toggle"]:checked').value;
	var request_url =
		"https://api.darksky.net/forecast/" +
		dark_sky_api_key +
		"/" +
		lat +
		"," +
		lng +
		"?units=" +
		unit +
		"&exclude=alerts,hourly,minutely";

	JSONP({
		url: request_url,
		success: function (data) {
			console.log(data);

			// We got the weather
			extractWeather(location, lat, lng, pre_placename, data);
		},
		error: function (error) {
			// We have an error, let's stop showing loading indicators
			setTimeout(function () {
				document.querySelector("html").classList.remove("is-loading");
				document
					.querySelector(".home")
					.classList.remove("is-loading-home");
				document
					.querySelector(".away")
					.classList.remove("is-loading-away");
				document.querySelector(".home").classList.remove("has-weather");
				document.querySelector(".away").classList.remove("has-weather");
				document
					.querySelector(".quick-wrapper")
					.classList.remove("has-weather");
			}, 600);
		},
	});
}

// Get the elevation of the location
// function getElevation(location, lat, lng, units) {
// 	var elevator = new google.maps.ElevationService();
// 	elevator.getElevationForLocations(
// 		{
// 			locations: [{ lat: lat, lng: lng }],
// 		},
// 		function(results, status) {
// 			if (status === "OK") {
// 				if (results[0]) {
// 					var elevation = formatElevation(
// 						results[0].elevation,
// 						units
// 					);
// 					fill(location, "elevation", elevation);
// 				} else {
// 					fill(location, "elevation", "N/A");
// 				}
// 			} else {
// 				fill(location, "elevation", "N/A");
// 			}
// 		}
// 	);
// }

// Extract only the data we need for the cards
function extractWeather(location, lat, lng, pre_placename, data) {
	// Data for currently card
	var currently_card_data = {
		apparentTemperature: data.currently.apparentTemperature,
		cloudCover: data.currently.cloudCover,
		currentlySummary: data.currently.summary,
		currentTime: data.currently.time,
		dailySummary: data.daily.summary,
		dewPoint: data.currently.dewPoint,
		humidity: data.currently.humidity,
		icon: data.currently.icon,
		lat: lat,
		lng: lng,
		location: location,
		ozone: data.currently.ozone,
		pre_placename: pre_placename,
		pressure: data.currently.pressure,
		sunriseTime: data.daily.data[0].sunriseTime,
		sunsetTime: data.daily.data[0].sunsetTime,
		temperature: data.currently.temperature,
		timezone: data.timezone,
		units: data.flags.units,
		uv: data.currently.uvIndex,
		visibility: data.currently.visibility,
		windBearing: data.currently.windBearing,
		windGust: data.currently.windGust,
		windSpeed: data.currently.windSpeed,
	};
	fillCurrentlyCard(currently_card_data);

	// Data for forecast card
	var forecast_card_data = {
		forecast: data.daily,
		location: location,
		timezone: data.timezone,
		units: data.flags.units,
	};
	makeForecastCard(forecast_card_data);
}

// Fill the cards with data
function fillCurrentlyCard(card_data) {
	var location = card_data.location;

	// Card color
	if (card_data.temperature !== undefined) {
		cardColor(location, card_data.units, card_data.temperature);
	}

	// Map
	setupMap(location, card_data.lat, card_data.lng);

	// Coordinatess
	if (card_data.lat !== undefined && card_data.lng !== undefined) {
		var coordinates =
			'<span class="prefix">Coordinates: </span>' +
			formatCoords(card_data.lat, card_data.lng);
		fill(location, "coordinates", coordinates);
	} else {
		fill(location, "coordinates", "Coordinates not available");
	}

	// Elevation
	// getElevation(location, card_data.lat, card_data.lng, card_data.units);

	// Set placename
	if (card_data.pre_placename !== undefined) {
		// Pre-locations have names preset as a variable or have already been set with Algolia
		setLocation(location, card_data.pre_placename);
	} else {
		// Get the away placename using the reverse geocoding API
		if (location == "away") {
			// getPlacename("away", card_data.lat, card_data.lng);
			setLocation("away", "Opposite Point on Earth");
		}
	}

	// Icon + Temperature
	if (card_data.temperature !== undefined) {
		var icon =
			'<svg><use xlink:href="#' + card_data.icon + '"></use></svg>';
		var temperature = formatTemp(card_data.temperature);
		fill(location, "temperature", icon + temperature);
		fill("quick-" + location, "quick-temperature", temperature);
	} else {
		fill(location, "temperature", icon + "--&deg;");
		fill("quick-" + location, "quick-temperature", "--&deg;");
	}

	// Summary
	var summary = formatSummary(card_data);
	fill(location, "summary", summary);
	fill("quick-" + location, "quick-summary", card_data.currentlySummary);

	// Local time
	var current_time = moment
		.unix(card_data.currentTime)
		.tz(card_data.timezone)
		.format("h:mm a");
	fill(location, "time", current_time);

	// Local date
	var current_date = moment
		.unix(card_data.currentTime)
		.tz(card_data.timezone)
		.format("dddd, MMMM Do");
	fill(location, "date", current_date);

	// Apparent Temperature
	var apparent_temperature = formatTemp(card_data.apparentTemperature);
	fill(location, "apparenttemperature", apparent_temperature);

	// Cloudiness
	if (card_data.cloudCover !== undefined) {
		var cloud_cover = formatPct(card_data.cloudCover);
		fill(location, "cloudcover", cloud_cover);
	} else {
		fill(location, "cloudcover", '<span class="not-available">N/A</span>');
	}

	// Wind Speed
	if (card_data.windSpeed !== undefined) {
		var wind_speed = formatSpeed(card_data.windSpeed, card_data.units);

		// Wind Direction
		if (card_data.windBearing !== undefined) {
			var wind_bearing = formatBearing(card_data.windBearing);
			var wind = wind_speed + " " + wind_bearing;
		} else {
			var wind = wind_speed;
		}

		fill(location, "wind", wind);
	} else {
		fill(location, "wind", '<span class="not-available">N/A</span>');
	}

	// Wind Gust
	if (card_data.windGust !== undefined) {
		var wind_gust = formatSpeed(card_data.windGust, card_data.units);
		fill(location, "windgust", wind_gust);
	} else {
		fill(location, "windgust", '<span class="not-available">N/A</span>');
	}

	// Humidity
	if (card_data.humidity !== undefined) {
		var humidity = formatPct(card_data.humidity);
		fill(location, "humidity", humidity);
	} else {
		fill(location, "humidity", '<span class="not-available">N/A</span>');
	}

	// Dew Point
	if (card_data.dewPoint !== undefined) {
		var dew_point = formatTemp(card_data.dewPoint);
		fill(location, "dewpoint", dew_point);
	} else {
		fill(location, "dewpoint", '<span class="not-available">N/A</span>');
	}

	// Barometric Pressure
	if (card_data.pressure !== undefined) {
		var pressure = formatPressure(card_data.pressure, card_data.units);
		fill(location, "pressure", pressure);
	} else {
		fill(location, "pressure", '<span class="not-available">N/A</span>');
	}

	// UV Index
	if (card_data.uv !== undefined) {
		var uv = formatUv(card_data.uv);
		fill(location, "uv", uv);
	} else {
		fill(location, "uv", '<span class="not-available">N/A</span>');
	}

	// Ozone Index
	if (card_data.ozone !== undefined) {
		var ozone = formatOzone(card_data.ozone);
		fill(location, "ozone", ozone);
	} else {
		fill(location, "ozone", '<span class="not-available">N/A</span>');
	}

	// Visibility
	if (card_data.visibility !== undefined) {
		var visibility = formatDistance(card_data.visibility, card_data.units);
		fill(location, "visibility", visibility);
	} else {
		fill(location, "visibility", '<span class="not-available">N/A</span>');
	}

	// Sunrise
	if (card_data.sunriseTime !== undefined) {
		var sunrise_time = moment
			.unix(card_data.sunriseTime)
			.tz(card_data.timezone)
			.format("h:mm a");
		fill(location, "sunrise", sunrise_time);
	} else {
		fill(location, "sunrise", '<span class="not-available">N/A</span>');
	}

	// Sunset
	if (card_data.sunsetTime !== undefined) {
		var sunset_time = moment
			.unix(card_data.sunsetTime)
			.tz(card_data.timezone)
			.format("h:mm a");
		fill(location, "sunset", sunset_time);
	} else {
		fill(location, "sunset", '<span class="not-available">N/A</span>');
	}

	// Remove loading indicators, waiting for transition to complete
	setTimeout(function () {
		document.querySelector("html").classList.remove("is-loading");
		document
			.querySelector("." + location)
			.classList.remove("is-loading-" + location);
		document.querySelector("." + location).classList.add("has-weather");
		document.querySelector(".quick-wrapper").classList.add("has-weather");
	}, 400);
}

// Set a `temp-#` class to set a color theme based on location temperature
function cardColor(location, units, temp) {
	// Clear any classes already set and set a new one
	document
		.querySelector("." + location)
		.classList.remove(
			"temp-0",
			"temp-1",
			"temp-2",
			"temp-3",
			"temp-4",
			"temp-5",
			"temp-6",
			"temp-7",
			"temp-8",
			"temp-9",
			"temp-10"
		);
	document
		.querySelector(".quick-" + location)
		.classList.remove(
			"temp-0",
			"temp-1",
			"temp-2",
			"temp-3",
			"temp-4",
			"temp-5",
			"temp-6",
			"temp-7",
			"temp-8",
			"temp-9",
			"temp-10"
		);

	// Convert temperature to a 0-10 scale
	var class_name = cardColorScale(units, temp);

	// Set `temp-#` to `.home` and `.away`
	document.querySelector("." + location).classList.add(class_name);
	document.querySelector(".quick-" + location).classList.add(class_name);
}

// Convert temperature to a 0-10 scale
function cardColorScale(units, temp) {
	if (units == "us") {
		if (temp >= 100) {
			var scale = 10;
		} else if (temp >= 90) {
			var scale = 9;
		} else if (temp >= 80) {
			var scale = 8;
		} else if (temp >= 70) {
			var scale = 7;
		} else if (temp >= 60) {
			var scale = 6;
		} else if (temp >= 50) {
			var scale = 5;
		} else if (temp >= 40) {
			var scale = 4;
		} else if (temp >= 30) {
			var scale = 3;
		} else if (temp >= 20) {
			var scale = 2;
		} else if (temp >= 10) {
			var scale = 1;
		} else if (temp < 10) {
			var scale = 0;
		}
	} else if (units == "si") {
		if (temp >= 37.7) {
			var scale = 10;
		} else if (temp >= 32.2) {
			var scale = 9;
		} else if (temp >= 26.7) {
			var scale = 8;
		} else if (temp >= 21.1) {
			var scale = 7;
		} else if (temp >= 15.6) {
			var scale = 6;
		} else if (temp >= 10) {
			var scale = 5;
		} else if (temp >= 4.4) {
			var scale = 4;
		} else if (temp >= -1.1) {
			var scale = 3;
		} else if (temp >= -6.7) {
			var scale = 2;
		} else if (temp >= -12.2) {
			var scale = 1;
		} else if (temp < -17.8) {
			var scale = 0;
		}
	}

	// Return a CSS class name
	return "temp-" + scale;
}

// Draw a globe centered around the lat/lng coord
function setupMap(location, lat, lng) {
	// Empty any maps already present
	document.querySelector("." + location + " .map").innerHTML = "";

	// Set the map resolution
	var size = 1000;
	var projection = d3.geo
		.orthographic()
		.scale(size / 2.1)
		.clipAngle(90)
		.translate([size / 2, size / 2]);

	var graticule = d3.geo.graticule();

	var canvas = d3
		.select("." + location + " .map")
		.append("canvas")
		.attr("width", size)
		.attr("height", size);

	var context = canvas.node().getContext("2d");

	var path = d3.geo.path().projection(projection).context(context);

	var λ = d3.scale.linear().domain([0, size]).range([-180, 180]);

	var φ = d3.scale.linear().domain([0, size]).range([90, -90]);

	d3.json("src/world-110m.json", function (error, topo) {
		if (error) {
			throw error;
		}

		var land = topojson.feature(topo, topo.objects.land),
			grid = graticule();

		context.clearRect(0, 0, size, size);

		context.beginPath();
		path({ type: "Sphere" });
		context.fillStyle = "rgba(0,0,0,.3)";
		context.fill();

		projection.rotate([-lng, -lat]);

		context.beginPath();
		path(land);
		context.fillStyle = "rgba(255,255,255,.9)";
		context.fill();

		context.beginPath();
		path(grid);
		context.lineWidth = 2;
		context.strokeStyle = "rgba(128,128,128,.2)";
		context.stroke();
	});

	d3.select(self.frameElement).style("height", size + "px");
}

// Create a forecast sub-card
function makeForecastCard(card_data) {
	var location = card_data.location;

	// Empty the forecast card
	document.querySelector("." + location + " .forecast-wrapper").innerHTML =
		"";

	// Loop through the days
	for (i = 0; i < card_data.forecast.data.length; i++) {
		var day_card_data = card_data.forecast.data[i];

		// Day of the Week
		var current_day = moment
			.unix(day_card_data.time)
			.tz(card_data.timezone)
			.format("dddd");
		var current_date = moment
			.unix(day_card_data.time)
			.tz(card_data.timezone)
			.format("MMM Do");

		// Summary
		if (day_card_data.summary !== undefined) {
			var summary = day_card_data.summary;
		} else {
			var summary = "Forecast summary not available.";
		}

		// Icon
		if (day_card_data.icon !== undefined) {
			var icon =
				'<svg class="forecast-icon"><use xlink:href="#' +
				day_card_data.icon +
				'"></use></svg>';
		} else {
			var icon = '<svg><use xlink:href="#clear"></use></svg>';
		}

		// High Temperature + Card Color
		if (day_card_data.temperatureHigh !== undefined) {
			var temperature_high = formatTemp(day_card_data.temperatureHigh);
			var class_name =
				" " +
				cardColorScale(card_data.units, day_card_data.temperatureHigh);
		} else {
			var temperature_high = "--&deg;";
			var class_name = "";
		}

		// Low Temperature
		if (day_card_data.temperatureLow !== undefined) {
			var temperature_low = formatTemp(day_card_data.temperatureLow);
		} else {
			var temperature_low = "--&deg;";
		}

		// Make the card
		var forecast_item =
			'<div class="forecast-item-wrapper full' +
			class_name +
			'" tabindex="1">' +
			'<div class="forecast-item">' +
			'<div class="forecast-day-wrapper">' +
			'<div class="forecast-day">' +
			current_day +
			"</div>" +
			// + '<div class="forecast-date">' + current_date + '</div>'
			"</div>" +
			'<div class="forecast-temperature-wrapper">' +
			icon +
			'<div class="forecast-temperature high">' +
			temperature_high +
			"</div>" +
			'<div class="forecast-temperature low">' +
			temperature_low +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>";

		// Add the card to `.forecast-wrapper`
		append(location, "forecast-wrapper", forecast_item);
	}
}

// Utilities =======================================================================================

// JSONP by larryosborn https://github.com/larryosborn/JSONP
(function () {
	var e, n, r, o, t, l, u, d;
	(r = function (e) {
		return window.document.createElement(e);
	}),
		(o = window.encodeURIComponent),
		(u = Math.random),
		(e = function (e) {
			var o, l, u, i, a, c, f;
			if (
				(null == e && (e = {}),
				(c = {
					data: e.data || {},
					error: e.error || t,
					success: e.success || t,
					beforeSend: e.beforeSend || t,
					complete: e.complete || t,
					url: e.url || "",
				}),
				(c.computedUrl = n(c)),
				0 === c.url.length)
			)
				throw new Error("MissingUrl");
			return (
				(i = !1),
				c.beforeSend({}, c) !== !1 &&
					((u = e.callbackName || "callback"),
					(l = e.callbackFunc || "jsonp_" + d(15)),
					(o = c.data[u] = l),
					(window[o] = function (e) {
						return (
							(window[o] = null),
							c.success(e, c),
							c.complete(e, c)
						);
					}),
					(f = r("script")),
					(f.src = n(c)),
					(f.async = !0),
					(f.onerror = function (e) {
						return (
							c.error({ url: f.src, event: e }),
							c.complete({ url: f.src, event: e }, c)
						);
					}),
					(f.onload = f.onreadystatechange = function () {
						var e, n;
						if (
							!(
								i ||
								("loaded" !== (e = this.readyState) &&
									"complete" !== e)
							)
						)
							return (
								(i = !0),
								f
									? ((f.onload = f.onreadystatechange = null),
									  null != (n = f.parentNode) &&
											n.removeChild(f),
									  (f = null))
									: void 0
							);
					}),
					(a =
						window.document.getElementsByTagName("head")[0] ||
						window.document.documentElement),
					a.insertBefore(f, a.firstChild)),
				{
					abort: function () {
						return (
							(window[o] = function () {
								return (window[o] = null);
							}),
							(i = !0),
							(null != f ? f.parentNode : void 0)
								? ((f.onload = f.onreadystatechange = null),
								  f.parentNode.removeChild(f),
								  (f = null))
								: void 0
						);
					},
				}
			);
		}),
		(t = function () {}),
		(n = function (e) {
			var n;
			return (
				(n = e.url),
				(n += e.url.indexOf("?") < 0 ? "?" : "&"),
				(n += l(e.data))
			);
		}),
		(d = function (e) {
			var n;
			for (n = ""; n.length < e; ) n += u().toString(36).slice(2, 3);
			return n;
		}),
		(l = function (e) {
			var n, r, t;
			return (
				(n = (function () {
					var n;
					n = [];
					for (r in e) (t = e[r]), n.push(o(r) + "=" + o(t));
					return n;
				})()),
				n.join("&")
			);
		}),
		("undefined" != typeof define && null !== define ? define.amd : void 0)
			? define(function () {
					return e;
			  })
			: (
					"undefined" != typeof module && null !== module
						? module.exports
						: void 0
			  )
			? (module.exports = e)
			: (this.JSONP = e);
}.call(this));

// Get units from url parameter
function _getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	var results = regex.exec(location.search);
	return results === null
		? undefined
		: decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Fill a value with HTML
function fill(location, name, value) {
	document.querySelector("." + location + " ." + name).innerHTML = value;
}

// Append HTML to a div
function append(location, name, value) {
	document.querySelector("." + location + " ." + name).innerHTML += value;
}

// Format geocoordinate values
function formatCoords(lat, lng) {
	return lat.toFixed(4) + ", " + lng.toFixed(4);
}

// Format temperature value
function formatTemp(temp) {
	return Math.round(temp) + "&deg;";
}

// Format a overall weather summary
function formatSummary(card_data) {
	if (card_data.currentlySummary !== undefined) {
		var currently = formatCurrentlySummary(card_data.currentlySummary);
	} else {
		var currently = "";
	}

	if (card_data.dailySummary !== undefined) {
		var daily = card_data.dailySummary;
	} else {
		var daily = "";
	}

	if (
		card_data.currentlySummary == undefined &&
		card_data.dailySummary == undefined
	) {
		return "Weekly forecast summary not available.";
	} else {
		return currently + daily;
	}
}

// Format just the currently summary
function formatCurrentlySummary(currently_summary) {
	// Makes just the first letter of the currently summary uppercase
	var currently_summary = currently_summary.toLowerCase();

	return (
		currently_summary.charAt(0).toUpperCase() +
		currently_summary.slice(1) +
		". "
	);
}

// Format percentage value
function formatPct(pct) {
	return Math.round(pct * 100) + "%";
}

// Format speed value with correct units
function formatSpeed(speed, units) {
	if (units == "us") {
		var unit = "mph";
	}
	if (units == "si") {
		var unit = "km/h";
	}

	return Math.round(speed) + " " + unit;
}

// Format barometric pressure value with correct units
function formatPressure(pressure, units) {
	if (units == "us") {
		var unit = "mb";
	}
	if (units == "si") {
		var unit = "hPa";
	}

	return Math.round(pressure) + " " + unit;
}

// Format visibility distance value with correct units
function formatDistance(distance, units) {
	if (units == "us") {
		var unit = "mi";
	}
	if (units == "si") {
		var unit = "km";
	}

	return Math.round(distance) + " " + unit;
}

// Format elevation value
// function formatElevation(elevation, units) {
// 	if (elevation >= 0) {
// 		var prefix = '<span class="prefix">Elevation: </span>';
// 	} else {
// 		var prefix = '<span class="prefix">Ground Elevation: </span>';
// 	}

// 	if (units == "us") {
// 		// Convert Google-returned elevation in meters to feet, and round
// 		return (
// 			prefix + Math.round(elevation * 3.28084).toLocaleString() + " ft"
// 		);
// 	} else if (units == "si") {
// 		// Show more precise elevation if necessary
// 		if (elevation < -10 || elevation > 10) {
// 			// Round elevation to whole number
// 			return prefix + Math.round(elevation).toLocaleString() + " m";
// 		} else {
// 			// Format elevation to one decimal point (e.g. 4.2 m)
// 			return (
// 				prefix +
// 				(Math.round(elevation * 10) / 10).toLocaleString() +
// 				" m"
// 			);
// 		}
// 	}
// }

// Format and convert degrees bearing to cardinal direction
function formatBearing(deg) {
	var val = Math.floor(deg / 22.5 + 0.5);
	var arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
	return arr[val % 8];
}

// // Format UV Index
function formatUv(uv) {
	if (uv > 11) {
		var index = "Extreme";
	} else if (uv > 8) {
		var index = "Very high";
	} else if (uv > 6) {
		var index = "High";
	} else if (uv > 3) {
		var index = "Moderate";
	} else {
		var index = "Low";
	}

	return uv + " (" + index + ")";
}

// // Format ozone in Dobson Units (DU)
function formatOzone(ozone) {
	return Math.round(ozone) + " DU";
}
