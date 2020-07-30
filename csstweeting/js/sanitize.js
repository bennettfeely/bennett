function sanitizeTweet(tweet, i) {
	var text = tweet.text.toLowerCase();

	// Remove the handle
	var text = text.replace("@csstweeting", "");

	// Remove URL
	var text = text.replace(/ *url\([^)]*\) */gi, " u̶r̶l̶(̶)̶");

	// Remove @import
	var text = text.replace(/\@import/gi, "@̶i̶m̶p̶o̶r̶t̶");

	// Remove content property
	var text = text.replace(/content/gi, "c̶o̶n̶t̶e̶n̶t̶");

	// Remove any other sneaky HTML
	var text = text.replace(/\</gi, "&lt;");

	// Clean up the result
	var text = text.trim();

	return text;
}
