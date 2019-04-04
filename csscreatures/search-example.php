<?php
	include "twitteroauth/twitteroauth.php";

	$consumer_key = "XXXXXXXXXX";
	$consumer_secret = "XXXXXXXXXX";
	$access_token = "XXXXXXXXXX";
	$access_token_secret = "XXXXXXXXXX";

	$twitter = new TwitterOAuth($consumer_key,$consumer_secret,$access_token,$access_token_secret);

	$banned_users = [''];

	if (count($banned_users) > 0) {
		$q = '-from:' . join('%20-from:', $banned_users) . '%20to%3Acsscreatures';
	} else {
		$q = 'to%3Acsscreatures';
	}

	$count = 16;
	$src = 'typd';
	$url = 'https://api.twitter.com/1.1/search/tweets.json?q=' . $q . '&count=' . $count . '&src=' . $src;

	$tweets = $twitter->get($url);

	echo json_encode($tweets);
?>