// Prefill data
var wobble = `
@keyframes wobble {
	0%,
	100% {
		transform: rotate3d(-1, 1, 0, 30deg);
	}
	25% {
		transform: rotate3d(1, 1, 0, 30deg);
	}
	50% {
		transform: rotate3d(1, -1, 0, 30deg);
	}
	75% {
		transform: rotate3d(-1, -1, 0, 30deg);
	}
}
`;

var menus = [
	{
		selector: ".menu-0",
		text: "Edit in CodePen",
		copy: {
			enabled: true,
			target: "#copy-0",
		},
		html: `<h1>
	<span data-z data-z-layers="3" data-z-depth="0.5em">A</span>
</h1>`,
		css:
			`h1 {
	font-size: 20vw;
	margin: 30px;
	color: #ffc107;
}

.z-text {
	animation: wobble 12s ease-in-out infinite;
	transform: rotateX(30deg) rotateY(-30deg);
}

.z-layer:nth-child(1) {
	color: #ffc107;
}

.z-layer:nth-child(2) {
	color: #4caf50;
}

.z-layer:nth-child(3) {
	color: #3f51b5;
}
` + wobble,
		js: "",
	},
	{
		selector: ".menu-1",
		text: "Edit in CodePen",
		copy: {
			enabled: true,
			target: "#copy-1",
		},
		html: `<h1>
	<span class="hero-text">Hello</span>
  <span class="hero-text">World</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #f44336;
	margin: 30px;
}

.z-text {
	transform: rotateY(-15deg);
	transition: transform 1s;
}

.z-layer:not(:first-child) {
	color: #b73229;
}`,
		js: `var ztxt = new Ztextify(".hero-text", {
	depth: "30px",
	layers: 8,
	fade: true,
	direction: "both",
	event: "pointer",
	eventRotation: "90deg"
});`,
	},
	{
		selector: ".menu-2",
		text: "Edit in CodePen",
		copy: {
			enabled: true,
			target: "#copy-2",
		},
		html: `<h1>
	<span data-z>CSS</span>
</h1>`,
		css: `h1 {
	font: bold 20vw "Georgia", serif;
	margin: 30px;
	color: #90a4ae;
}

.z-text {
	/* Tip: Apply CSS transforms here */
	/* rotateX() == up/down */
	/* rotateY() == left/right */
	transform: rotateX(15deg) rotateY(-30deg);
}

.z-layer:not(:first-child) {
	color: #455a64;
}`,
		js: "",
	},
	{
		selector: ".menu-3",
		text: "Edit",
		copy: {
			enabled: true,
			target: "#copy-3",
		},
		html: `<span data-z data-z-layers="15" data-z-depth="50px">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="200" height="200">
		<path d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 00325 122.47a102.38 102.38 0 01-29.46 8.07 51.47 51.47 0 0022.55-28.37 102.79 102.79 0 01-32.57 12.45 51.34 51.34 0 00-87.41 46.78A145.62 145.62 0 0192.4 107.81a51.33 51.33 0 0015.88 68.47A50.91 50.91 0 0185 169.86v.65a51.31 51.31 0 0041.15 50.28 51.21 51.21 0 01-23.16.88 51.35 51.35 0 0047.92 35.62 102.92 102.92 0 01-63.7 22 104.41 104.41 0 01-12.21-.74 145.21 145.21 0 0078.62 23" stroke="#1da1f2" stroke-width="10px" fill="none" />
	</svg>
</span>`,
		css:
			`/* CodePen styles */
body {
	margin: 30px;
}

/* Demo Styles */
.z-text {
	animation: wobble 10s ease-in-out infinite;
	transform: rotateX(30deg) rotateY(-30deg);
}

.z-layer {
   filter: brightness(0.7);
}

.z-layer:first-child {
   filter: brightness(1);
}
` + wobble,
		js: "",
	},
	{
		selector: ".menu-4",
		text: "Edit",
		copy: {
			enabled: true,
			target: "#copy-4",
		},
		html: `<span data-z data-z-depth="40px">
   <img width="150" height="120" src="https://bennettfeely.com/ztext/img/grace.jpg" alt="Photo of Grace">
<span>`,
		css:
			`/* CodePen styles */
body {
	margin: 30px;
}

/* Demo styles */
.z-text {
	animation: wobble 10s ease-in-out infinite;
	transform: rotateX(30deg) rotateY(-30deg);
}

.z-layer {
   filter: brightness(0.7);
}

.z-layer:first-child {
   filter: brightness(1);
}
` + wobble,
		js: "",
	},
	{
		selector: ".menu-5",
		text: "Edit",
		copy: {
			enabled: true,
			target: "#copy-5",
		},
		html: `<span data-z data-z-layers="20" data-z-depth="50px">😂🔥🍔</span>`,
		css:
			`/* CodePen styles */
body {
	font-size: 5em;
	margin: 30px;
}

/* Demo styles */
.z-text {
	animation: wobble 10s ease-in-out infinite;
	transform: rotateX(30deg) rotateY(-30deg);
}

.z-layer {
   filter: brightness(0.7);
}

.z-layer:first-child {
   filter: brightness(1);
}
` + wobble,
		js: "",
	},
	{
		selector: ".menu-6",
		text: "Edit",
		copy: {
			enabled: false,
			target: "",
		},
		html: `<h1>
  <span data-z>1rem</span>
</h1>

<h1>
  <span data-z data-z-layers="25" data-z-depth="60px">60px</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #ffc107;
	margin: 30px;
}

.z-text {
  transform: rotateX(30deg) rotateY(-30deg);
  transition: transform 1s;
}

[data-z]:hover .z-text {
  transform: rotateX(-30deg) rotateY(30deg)
}

.z-layer:not(:first-child) {
	color: #bf9105;
}`,
		js: "",
	},
	{
		selector: ".menu-7",
		text: "Edit",
		copy: {
			enabled: false,
			target: "#copy-7",
		},
		html: `<h1>
	<span data-z data-z-layers="20" data-z-depth=".25em">10</span>
</h1>

<h1>
	<span data-z data-z-depth=".5em" data-z-layers="2">2</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #009688;
	margin: 30px;
}

.z-text {
  transform: rotateX(30deg) rotateY(-30deg);
  transition: transform 1s;
}

[data-z]:hover .z-text {
  transform: rotateX(-30deg) rotateY(30deg)
}

.z-layer:not(:first-child) {
	color: #007166;
}`,
		js: "",
	},
	{
		selector: ".menu-8",
		text: "Edit",
		copy: {
			enabled: false,
			target: "#copy-8",
		},
		html: `<h1>
	<span data-z data-z-perspective="none">none</span>
</h1>

<h1>
	<span data-z data-z-perspective="100px">80px</span>
</h1>

<h1>
	<span data-z data-z-perspective="500px">500px</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #ff9800;
	margin: 30px;
}

.z-text {
	transform: rotateX(30deg) rotateY(-30deg);
	transition: transform 1s;
}

[data-z]:hover .z-text {
	transform: rotateX(-30deg) rotateY(30deg);
}

.z-layer:not(:first-child) {
	color: #bf7200;
}
`,
		js: "",
	},
	{
		selector: ".menu-9",
		text: "Edit",
		copy: {
			enabled: false,
			target: "#copy-9",
		},
		html: `<h1>
	<span data-z data-z-fade="true" data-z-layers="10" data-z-depth=".25em">fade</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #03a9f4;
	margin: 30px;
}

.z-text {
	transform: rotateX(30deg) rotateY(-30deg);
	transition: transform 1s;
}

[data-z]:hover .z-text {
	transform: rotateX(-30deg) rotateY(30deg);
}

.z-layer:not(:first-child) {
	color: #027fb7;
}`,
		js: "",
	},
	{
		selector: ".menu-10",
		text: "Edit",
		copy: {
			enabled: false,
			target: "#copy-10",
		},
		html: `<h1>
	<span data-z data-z-depth=".5em">both</span>
</h1>

<h1>
	<span data-z data-z-direction="backwards" data-z-depth=".5em">backwards</span>
</h1>

<h1>
	<span data-z data-z-direction="forwards" data-z-depth=".5em">forwards</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #fdd835;
	margin: 30px;
}

.z-text {
	background: rgba(96, 125, 139, .5);
}

[data-z-direction="backwards"] .z-layer:first-child {
	transform: translateZ(-1px) !important;
}

.z-text {
	transform: rotateX(30deg) rotateY(-30deg);
	transition: transform 1s;
}

body:hover .z-text {
	transform: rotateX(-30deg) rotateY(30deg);
}

.z-layer:not(:first-child) {
	color: #bea228;
}
`,
		js: "",
	},
	{
		selector: ".menu-11",
		text: "Edit",
		copy: {
			enabled: false,
			target: "#copy-11",
		},
		html: `<h1>
	<span data-z data-z-event="pointer">pointer</span>
</h1>

<h1>
	<span data-z data-z-event="scroll">scroll</span>
</h1>

<h1>
	<span data-z data-z-event="scrollX">scrollX</span>
</h1>

<h1>
	<span data-z data-z-event="scrollY">scrollY</span>
</h1>

`,
		css: `/* CodePen styles */
body {
	min-height: 150vh;
	min-width: 150vw;
	margin: 25vmin;
}

/* Demo styles */
h1 {
	font-size: 10vw;
	color: #8bc34a;
	margin: 30px;
}

.z-text {
	transform: rotateX(-15deg);
	transition: transform 1s;
}

.z-layer:not(:first-child) {
	color: #689238;
}`,
		js: "",
	},
	{
		selector: ".menu-12",
		text: "Edit",
		copy: {
			enabled: false,
			target: "#copy-12",
		},
		html: `<h1>
	<span data-z data-z-event="pointer" data-z-eventRotation="20deg">20deg</span>
</h1>

<h1>
	<span data-z data-z-event="pointer" data-z-eventRotation="60deg">60deg</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #fe7043;
	margin: 30px;
}

.z-text {
	transform: rotateY(-15deg);
	transition: transform 1s;
}

.z-layer:not(:first-child) {
	color: #bf5433;
}`,
		js: "",
	},
	{
		selector: ".menu-13",
		text: "Edit",
		copy: {
			enabled: false,
			target: "#copy-13",
		},
		html: `<h1>
	<span data-z data-z-event="pointer" data-z-eventDirection="default">default</span>
</h1>

<h1>
	<span data-z data-z-event="pointer" data-z-eventDirection="reverse">reverse</span>
</h1>`,
		css: `h1 {
	font-size: 10vw;
	color: #5c6ac0;
	margin: 30px;
}

.z-text {
	transform: rotateY(-15deg);
	transition: transform 1s;
}

.z-layer:not(:first-child) {
	color: #454f90;
}`,
		js: "",
	},
];

// Build and append buttons
menus.forEach((menu) => {
	var selector = document.querySelector(menu.selector);

	// Append script tag to HTML prefill
	var script_tag =
		'\n\n<script src="https://bennettfeely.com/ztext/js/ztext.min.js"></script>';

	var data = {
		css: menu.css,
		css_prefix: "neither",
		css_starter: "neither",
		description: "ztext.js test, from https://bennettfeely.com/ztext",
		html: menu.html + script_tag,
		js: menu.js,
		tags: ["ztext", "ztext.js", "3D", "bennettfeely"],
		title: "ztext.js test",
	};

	// Escape quotes for use in form value
	var JSONstring = JSON.stringify(data)
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");

	// Create the form
	var form = `<form class="codepen-form" action="https://codepen.io/pen/define" method="POST" target="_blank">
			<input type="hidden" name="data" value='${JSONstring}'>
			<button class="codepen-button">${menu.text}</button>
		</form>`;

	// Add a copy button
	if (menu.copy.enabled == true) {
		// Create copy button and append it to menu
		var copy = `<button class="copy-button" data-clipboard-target="${menu.copy.target}">Copy</button>`;
		selector.innerHTML += copy;

		// Create clipboard functionality
		var clipboard = new ClipboardJS(menu.selector + " .copy-button");

		// If it worked, change text of button temporarily
		clipboard.on("success", function (e) {
			var trigger = e.trigger;
			var target = document.querySelector(menu.copy.target);

			trigger.innerHTML = "Copied!";

			trigger.classList.add("is-on");
			target.classList.add("is-on");

			// Reset the button text and class
			setTimeout(() => {
				trigger.innerHTML = "Copy";
				trigger.classList.remove("is-on");
				target.classList.remove("is-on");
			}, 2000);

			e.clearSelection();
		});
	}

	selector.innerHTML += form;
});
