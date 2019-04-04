<?php
	include "twitteroauth/twitteroauth.php";

	$minutes = date('i');
	$seconds = date('s');
	if ($minutes % 2 == 0) {
		if ($seconds % 2 == 0) {
			$consumer_key = "Kp4lhG5Z3iOGz4k5zc0YXJGqy";
			$consumer_secret = "SYyNjfISUg4RXX2ceIXqMCNtfE3YjLyVG4a9MCySkRSe1qbCSf";
			$access_token = "242535849-iLdfSqarkHz1Yxk1t5Azch6WM46lUzbI3q5cpWRM";
			$access_token_secret = "FAPrtjOY6DIfDzaqUaZpDhu1FR9Jvq5nqydvLSdT5cqVN";
		} else {
			$consumer_key = "fzJub0X8Nrh2lTviBN1d2fUBt";
			$consumer_secret = "VL77AY5j1ALMbfAf131YD2VOXJRWZG2sl8O8nQedNpz667LU6Y";
			$access_token = "242535849-eCmMtDyRrqumYLxhPl4tidkMKaZUOZptZr9eXTMS";
			$access_token_secret = "cJ1OZNnAcgHFmbCm7E8eQVfStItMn3EvsoIFU46hvEQT5";
		}
	} else {
		if ($seconds % 2 == 0) {
			$consumer_key = "LoWtI35APLiMr6sXxnLCfpCoT";
			$consumer_secret = "Jf2iqnTtimIvODnUwUENxKsoHWLKT1XLMK8x6HTOpQUY37Pa4L";
			$access_token = "242535849-7PxE5WCijEMvsbd9w1IgLRf6lBMMLlSbQFlNBU6Q";
			$access_token_secret = "0HynUNsx71YRBdx8vac4psKsp2XQtYicf5TkpavIINqFE";
		} else {
			$consumer_key = "mAl0p0whqMbkdfIAeWgFKFBvD";
			$consumer_secret = "Vtp9KeaEHewqA7O7lIUtEHgKBp9aPb1nL8TWPLbLynf8bPBU53";
			$access_token = "242535849-ekaBaCrtCKDlZnkbXW3qs6VVSTQTNowXqv2G4dfS";
			$access_token_secret = "aV79AjwwiZHCMF9CrqgdsDqeXbAN7a9CbpkkLTL2urPWh";
		}
	}

	$twitter = new TwitterOAuth($consumer_key,$consumer_secret,$access_token,$access_token_secret);

	$banned_users = [''];

	if (count($banned_users) > 0) {
		$q = '-from:' . join('%20-from:', $banned_users) . '%20to%3Acsscreatures';
	} else {
		$q = 'to%3Acsscreatures';
	}

	$count = 9;
	$src = 'typd';
	$url = 'https://api.twitter.com/1.1/search/tweets.json?q=' . $q . '&count=' . $count . '&src=' . $src;

	$tweets = $twitter->get($url);

	echo json_encode($tweets);

?>