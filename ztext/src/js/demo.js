var tip = document.querySelector(".tip");
var tip_button = document.querySelector(".tip-button");
var toggles = document.querySelectorAll(".toggle");
var tabs = document.querySelectorAll(".tab");
var examples = document.querySelectorAll(".more [data-z]");
var pause = document.querySelector(".pause");

// Add button to pause animations
tip.addEventListener("input", (e) => {
	var val = parseFloat(e.target.value);

	if (isNaN(val)) {
		var val = 10;
	}

	console.log(val);

	var donation_url =
		"https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=9YZX9KJVUDWXW&currency_code=USD&source=url&amount=" +
		val;

	tip_button.href = donation_url;
});

function reset(set) {
	// Reset style from toggles
	set.forEach((set_item) => {
		set_item.classList.remove("is-on");
	});
}

// Add focus handler to each toggle button
toggles.forEach((toggle) => {
	toggle.addEventListener("click", (e) => {
		// Reset style from toggles
		reset(toggles);
		reset(tabs);
		reset(examples);

		// Enable pause animation button
		pause.classList.add("is-on");

		// Add 'on' state to toggle
		e.target.classList.add("is-on");

		// Display current tab
		var on_tab = "." + e.target.dataset.show + "-code-tab";
		document.querySelector(on_tab).classList.add("is-on");

		// Play animation on example
		var on_example = "." + e.target.dataset.show + "-code-example";
		document.querySelector(on_example).classList.add("is-on");
	});
});

// Add button to pause animations
pause.addEventListener("click", (e) => {
	reset(examples);

	pause.classList.remove("is-on");
});

var steps = [
	"#header",
	"#html-init",
	"#styling",
	"#more",
	// "#depth",
	// "#layers",
	// "#perspective",
	// "#fade",
	// "#direction",
	// "#event",
	// "#eventRotation",
	// "#event-direction",
	"#header",
];

step = 0;
document.onkeypress = function (e) {
	e = e || window.event;

	if (e.keyCode == "110") {
		var current_step = steps[step++];

		console.log(current_step);

		window.location.href = current_step;
	}
};
