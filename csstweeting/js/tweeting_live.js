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
			((diff < 60 && "just now") ||
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
// Get Tweets from the Twitter API
function getTweets() {
	// Generate a random string to prevent caching
	var random_string = Math.random().toString(36).substring(7);

	var request = new XMLHttpRequest();
	var uri =
		"https://copypastelist.com/wp-content/themes/plaintheme/csstweeting_server/";
	request.open("GET", uri + "search.php?" + random_string, true);
	// request.withCredentials = false;

	request.onload = function () {
		var status = this.status;

		// Request is good
		if (status == 200) {
			var json = JSON.parse(this.response);

			if (json.statuses.length > 0) {
				parseTweets(json);
			}
		}
	};

	request.send();
}

// ===================================================================================
// We have the tweets
function parseTweets(json) {
	// document.querySelector(".stylesheet").innerHTML = "";

	if (json.statuses.length > 0) {
		for (i = 0, len = json.statuses.length; i < len; ++i) {
			console.log(json.statuses.length - i - 1);
			var tweet = json.statuses[json.statuses.length - i - 1];

			var text = sanitizeTweet(tweet);

			var text = "<style>" + text + "</style>";

			document.querySelector(".stylesheet-wrapper").innerHTML += text;
		}
	} else {
		defaultTweets();
	}
}

// ===================================================================================
// Init
init();

function init() {
	getTweets();
}
