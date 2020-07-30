// =====================================================================
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

// =====================================================================
// Get Tweets from the Twitter API
function getTweets() {
	// Generate a random string to prevent caching
	var random_string = Math.random().toString(36).substring(7);

	var request = new XMLHttpRequest();
	var uri =
		"https://copypastelist.com/wp-content/themes/plaintheme/csstweeting_server/";
	request.open("GET", uri + "search.php?" + random_string, true);

	request.onload = function () {
		var status = this.status;

		// Request is good
		if (status == 200) {
			var json = JSON.parse(this.response);

			if (json.errors !== undefined) {
				defaultTweets(
					"/* Too busy! */",
					"/* Sorry, there's a lot of people visiting right now and we can't keep up. Please come back another time. */"
				);
			} else {
				if (json.statuses.length > 0) {
					// We have tweets

					// Show the ad
					// document.querySelector(".ad-box").classList.add("is-ready");

					parseTweets(json);
				} else {
					// No one has tweeted
					defaultTweets(
						"/* No one has tweeted recently and the page looks a little boring. */",
						"/* You can still tweet CSS to @csstweeting and make this page look however you would like. */"
					);
				}
			}
		}

		// Request is rate limited
		if (status == 420 || status == 429) {
			defaultTweets(
				"/* Too busy! */",
				"/* Sorry, there's a lot of people visiting right now and we can't keep up. Please come back another time. */"
			);
		}

		// Twitter is not working
		if (status == 500 || status == 502) {
			defaultTweets(
				"/* Twitter is down! */",
				"/* It looks like Twitter isn't working right now. You'll have to come back another time. */"
			);
		}
	};

	request.onerror = function () {
		defaultTweets(
			"/* Oh no! */",
			"/* Something isn't working. Please come back another time. */"
		);
	};

	request.send();
}

// =====================================================================
// We have the tweets
function parseTweets(json) {
	document.querySelector(".stylesheet .container").innerHTML = "";

	if (json.statuses.length > 0) {
		for (i = 0, len = json.statuses.length; i < len; ++i) {
			var tweet = json.statuses[json.statuses.length - i - 1];

			displayTweet(tweet, i);

			if (i == len - 1) {
				console.log("done!");
				console.log(tweet);

				var stylesheet_wrapper = document.querySelector(
					".stylesheet-wrapper"
				);
				stylesheet_wrapper.scrollTop = stylesheet_wrapper.scrollHeight;
			}
		}
	} else {
		defaultTweets();
	}
}

// =====================================================================
// We don't have tweets, show a message
function defaultTweets(message_headline, message_body) {
	var message = `${message_headline}<br><br>${message_body}`;

	document.querySelector(".stylesheet .container").innerHTML = message;
}

// =====================================================================
function displayTweet(tweet, i) {
	var text = sanitizeTweet(tweet);

	// Syntax highlight the result
	var text = Prism.highlight(text, Prism.languages.css, "css");

	// Build the tweet
	var snippet = `<div class="tweet"><div class="token comment">/* <a href="https://twitter.com/${
		tweet.user.screen_name
	}/status/${tweet.id_str}">\@${tweet.user.screen_name}</a> ${prettyDate(
		tweet.created_at
	)} */</div><div class="tweet-text">${text}</div></div>`;

	document.querySelector(".stylesheet .container").innerHTML += snippet;
}

// =====================================================================
// Init
init();

function init() {
	getTweets();
}
