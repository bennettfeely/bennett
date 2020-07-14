// ===================================================================================
// Prettify Date
// Copyright (c) 2011 John Resig (ejohn.org)
// Licensed under the MIT and GPL licenses.
function prettyDate(time) {
	var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
		diff = (new Date().getTime() - date.getTime()) / 1000,
		day_diff = Math.floor(diff / 86400);

	if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
		return;
	}

	return (
		(day_diff == 0 &&
			((diff < 60 && "Just now") ||
				(diff < 120 && "1 minute ago") ||
				(diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
				(diff < 7200 && "1 hour ago") ||
				(diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
		(day_diff == 1 && "1 day ago") ||
		(day_diff < 7 && day_diff + " days ago") ||
		(day_diff == 7 && "1 week ago") ||
		(day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago")
	);
}

// ===================================================================================
// Random animation delay and duration
function randomAnimationTiming(target_seconds) {
	var duration =
		Math.floor(
			(target_seconds / 2 + Math.random() * target_seconds) * 100
		) / 100;
	var delay =
		Math.floor(
			(target_seconds / 2 + Math.random() * target_seconds) * 100
		) / 100;

	return (
		"animation-duration: " +
		duration +
		"s; animation-delay: -" +
		delay +
		"s"
	);
}

// ===================================================================================
// Get color from tweet
function getColor(string) {
	var hex = string.match(/(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/gm);
	var colors = [
		"aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|transparent|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",
	];

	var color_name = string.match(RegExp("\\b" + colors + "\\b"));

	if (hex) {
		var color = hex[0];
	}
	if (color_name) {
		var color = color_name[0];
	}

	if (color !== undefined) {
		return `background-color:${color};`;
	} else {
		return ``;
	}
}

// ===================================================================================
// Get Tweets from the Twitter API
function getTweets() {
	// Generate a random string to prevent caching
	var random_string = Math.random().toString(36).substring(7);

	var request = new XMLHttpRequest();
	var uri =
		"https://copypastelist.com/wp-content/themes/plaintheme/csscreatures_server/";
	request.open("GET", uri + "search.php?" + random_string, true);
	request.withCredentials = false;

	request.onload = function () {
		var status = this.status;

		// Request is good
		if (status == 200) {
			var json = JSON.parse(this.response);

			if (json.errors !== undefined) {
				defaultTweets(
					"Too busy!",
					"We're sorry, there's a lot of people visiting right now and we can't keep up. Please come back another time."
				);
			} else {
				if (json.statuses.length > 0) {
					// We have tweets
					parseTweets(json);
				} else {
					// No one has tweeted
					defaultTweets(
						"Where is everyone?",
						"Be the first to have your creature here! Send a tweet to @csscreatures!"
					);
				}
			}
		}

		// Request is rate limited
		if (status == 420 || status == 429) {
			defaultTweets(
				"Too busy!",
				"We're sorry, there's a lot of people visiting right now and we can't keep up. Please come back another time."
			);
		}

		// Twitter is not working
		if (status == 500 || status == 502) {
			defaultTweets(
				"Twitter is down!",
				"It looks like Twitter isn't working right now. You'll have to come back another time."
			);
		}
	};

	request.onerror = function () {
		defaultTweets(
			"Oh no!",
			"Something isn't working. Please com eback another time."
		);
	};

	request.send();
}

// ===================================================================================
// We have the tweets
function parseTweets(json) {
	if (json.statuses.length > 0) {
		for (i = 0, len = json.statuses.length; i < len; ++i) {
			var tweet = json.statuses[i];

			buildCreature(tweet, i);
		}
	} else {
		defaultTweets();
	}
}

// ===================================================================================
// We don't have tweets, show a message
function defaultTweets(message_headline, message_body) {
	var message = `<div class="item default-box creature-box mod-tooth mod-sad">
			<div class="creature" style="background-color: tomato; animation-duration: 5.33s; animation-delay: -6.11s">
				<div class="face" style="animation-duration: 6s; animation-delay: -7s">
					<div class="eyes">
						<div class="eye" style="animation-duration: 6s; animation-delay: -5s"></div>
						<div class="eye" style="animation-duration: 6s; animation-delay: -5s"></div>
					</div>
					<div class="mouth">
						<div class="tooth"></div>
					</div>
				</div>
			</div>
			<div class="info">
				<h2>${message_headline}</h2>
				<h3>${message_body}</h3>
			</div>
		</div>`;

	document.querySelector(".creatures-featured").innerHTML += message;
}

// ===================================================================================
// Build the creature and box
function buildCreature(tweet, i) {
	// Get the tweet, strip the handle, make all lowercase
	var string = tweet.text.replace("@csscreatures ", "").toLowerCase();

	// This captures all modifiers and adds them as classes to .item
	var mod_set = [];

	// List of modifiers
	var mod_array = [
		{
			mod: "angry",
			syn: "furious|mad|shake|shaking",
		},
		{
			mod: "camouflage",
			syn: "camo|ghillie|hidden|military|soldier|troop",
		},
		{
			mod: "cyclops",
			syn: "one-eye|one-eyed|monster|wazowski",
		},
		{
			mod: "dark",
			syn: "black|#000|#000000",
		},
		{
			mod: "ghost",
			syn: "casper|scary|spooky",
		},
		{
			mod: "hungry",
			syn: "eating|fat|plump|talk|talking",
		},
		{
			mod: "hyper",
			syn: "animated|excited|happy|pumped|super|smiley",
		},
		{
			mod: "jack-o-lantern",
			syn: "halloween|pumpkin",
		},
		{
			mod: "moustache",
			syn: "mustache|hairy",
		},
		{
			mod: "nervous",
			syn: "anxious|scared",
		},
		{
			mod: "rainbow",
			syn: "colorful|colors|hippie|hippy|tiedye",
		},
		{
			mod: "sad",
			syn: "crying|depressed|upset",
		},
		{
			mod: "sleepy",
			syn: "asleep|sleep|sleeping|sleepy|tired|rest|resting|quiet",
		},
		{
			mod: "square",
			syn: "box|boxy|minecraft|robot|robotic",
		},
		{
			mod: "tall",
			syn: "big|giant|gigantic|huge|skinny|thin",
		},
		{
			mod: "tiny",
			syn: "baby|dwarf|little|mini|miniature|petite|short|small",
		},
		{
			mod: "teeth",
			syn: "smile|smiling|smiley",
		},
		{
			mod: "transparent",
			syn:
				"checker|checkerboard|checkered|invisible|see-through|translucent",
		},
		{
			mod: "tooth",
			syn: "hillbilly",
		},
		{
			mod: "upside-down",
			syn: "backwards|upsidedown|rollover",
		},
		{
			mod: "wink",
			syn: "winking",
		},
	];

	// Search for keywords in the mod_array and add them as classes to .item
	for (var n = 0; n < mod_array.length; n++) {
		var regex = RegExp(
			"\\b" + mod_array[n].mod + "|" + mod_array[n].syn + "\\b"
		);
		var mod_test = string.match(regex);

		if (mod_test) {
			mod_set.push("mod-" + mod_array[n].mod);
		}
	}

	// Eyes
	var eye = `<div class="eye" style="${randomAnimationTiming(5)}"></div>`;
	var eyes = `<div class="eyes">${eye}${eye}</div>`;

	if (mod_set.indexOf("mod-cyclops") > -1) {
		var eyes = `<div class="eyes">${eye}</div>`;
	}

	// Moustache
	var moustache = "";
	if (mod_set.indexOf("mod-moustache") > -1) {
		var moustache = `<svg class="moustache" xmlns="http://www.w3.org/2000/svg" viewBox="83 299 443 121" preserveAspectRatio="none" width="220" height="60"><path d="M407 338C402 336 398 332 395 330 382 318 364 300 338 300 325 300 313 305 305 313 296 305 284 300 271 300 245 300 227 318 215 330 211 332 207 336 202 338 126 377 84 345 84 345 151 462 265 411 295 390 299 388 302 386 305 383 307 386 311 388 314 390 344 411 459 462 526 345Z" fill="#3F1F13"/></svg>`;
	}

	// Mouth
	var tooth = `<div class="tooth"></div>`;
	var mouth = `<div class="mouth"></div>`;
	if (mod_set.indexOf("mod-tooth") > -1) {
		var mouth = `<div class="mouth">${tooth}</div>`;
	}
	if (
		mod_set.indexOf("mod-teeth") > -1 ||
		mod_set.indexOf("mod-jack-o-lantern") > -1
	) {
		var mouth = `<div class="mouth">${tooth}${tooth}</div>`;
	}

	// Create a unique id for each creature
	var creature_id = "creature_" + i;

	var mod_set = mod_set.join(" ");
	var delay = i * 0.15 + "s";

	// Build the creature
	var creature = `<div id="${creature_id}" class="item creature-box ${mod_set}" style="animation-delay:${delay}">
			<div class="creature" style="${getColor(string)}${randomAnimationTiming(5)}">
				<div class="face" style="${randomAnimationTiming(5)}">
					${eyes}
					${moustache}
					${mouth}
				</div>
			</div>
			<div class="info">
			<h3>
				<a href="https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}">
					\@${tweet.user.screen_name}
				</a>
			</h3>
			<h3>${prettyDate(tweet.created_at)}</h3>
			</div>
		</div>`;

	// Add the creature to the page
	if (i == 3) {
		document.querySelector(".ad-box").classList.add("is-ready");
	} else {
		if (i <= 2) {
			document.querySelector(".creatures-featured").innerHTML += creature;
		} else {
			document.querySelector(".creatures-more").innerHTML += creature;
		}
	}
}

// ===================================================================================
// Toggle on/off directions list
function handleDirectionsToggle() {
	var directions_toggle = document.querySelectorAll(".directions-toggle");
	var directions_box = document.querySelector(".directions-box");
	var creatures = document.querySelector(".creatures");

	for (var i = 0; i < directions_toggle.length; i++) {
		directions_toggle[i].addEventListener("click", function () {
			// Toggle on and off the directions list by adding a class to <html>
			document
				.querySelector("html")
				.classList.toggle("showing-directions");

			// Scroll to top of window
			window.scrollTo(0, 0);
		});
	}

	// creatures.addEventListener("click", function () {
	// 	if (
	// 		document
	// 			.querySelector("html")
	// 			.classList.contains("showing-directions")
	// 	) {
	// 		document
	// 			.querySelector("html")
	// 			.classList.remove("showing-directions");

	// 		// Scroll to top of window
	// 		window.scrollTo(0, 0);
	// 	}
	// });
}

function autoPause() {
	// CSS animations play when the tab is not in view, we don't need that

	// Create a placeholder <style> tag that we can quickly insert and remove CSS
	var auto_pause = document.createElement("style");
	document.querySelector("body").appendChild(auto_pause);

	// Listen for when the user leaves the page
	document.addEventListener("visibilitychange", function () {
		if (document.hidden) {
			// Pause all the animaions
			auto_pause.innerHTML =
				"* { animation-play-state: paused !important; }";
		} else {
			// Restart all the animations
			setTimeout(function () {
				auto_pause.innerHTML = "";
			}, 300);
		}
	});
}

// ===================================================================================
// Init
init();

function init() {
	getTweets();
	handleDirectionsToggle();
	autoPause();
}
