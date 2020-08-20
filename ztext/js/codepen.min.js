var codepen = [
	{
		selector: ".codepen-edit-0",
		text: "Edit on CodePen",
		js: "",
		css: "",
		html: `<h1 data-z data-z-layers="3" data-z-depth="0.5em">A</h1>`,
	},
	{
		selector: ".codepen-edit-1",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-2",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-3",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-4",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-5",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-6",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-7",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-8",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-9",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-10",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-11",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-12",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
	{
		selector: ".codepen-edit-13",
		text: "Edit",
		html: "",
		css: "",
		js: "",
	},
];

codepen.forEach((pen) => {
	var selector = document.querySelector(pen.selector);

	// css                   : "html { color: red; }",
	// css_external          : "http://yoursite.com/style.css", // semi-colon separate multiple files
	// css_pre_processor     : "none" || "less" || "scss" || "sass" || "stylus",
	// css_prefix            : "autoprefixer" || "prefixfree" || "neither",
	// css_starter           : "normalize" || "reset" || "neither",
	// description           : "It's about stuff.",
	// editors               : "101", // Set which editors are open. In this example HTML open, CSS closed, JS open
	// head                  : "<meta name='viewport' content='width=device-width'>",
	// html                  : "<div>HTML here.</div>",
	// html_classes          : "loading",
	// html_pre_processor    : "none" || "slim" || "haml" || "markdown",
	// js                    : "alert('test');",
	// js_external           : "http://yoursite.com/script.js" // semi-colon separate multiple files
	// js_pre_processor      : "none" || "coffeescript" || "babel" || "livescript" || "typescript",
	// layout                : "left", // top | left | right
	// parent                : id // If supplied, the Pen will save as a fork of this id. Note it's not the slug, but ID. You can find the ID of a Pen with `window.CP.pen.id` in the browser console.
	// private               : false, // true || false - When the Pen is saved, it will save as Private if logged in user has that privledge, otherwise it will save as public
	// tags                  : ["tag1", "tag2"], // an array of strings
	// title                 : "New Pen!",

	var data = {
		css: pen.css,
		css_prefix: "autoprefixer",
		css_starter: "neither",
		description: "Ztext.js test, from https://bennettfeely.com/ztext",
		html: pen.html,
		js: pen.js,
		// js_external: "https://bennettfeely.com/ztext/js/ztext.js",
		tags: ["ztext", "ztext.js", "3D", "bennettfeely"],
		title: "ztext.js test",
	};

	var JSONstring = JSON.stringify(data)
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");

	var form = `<form class="codepen-form" action="https://codepen.io/pen/define" method="POST" target="_blank">
			<input type="hidden" name="data" value='${JSONstring}'>
			<button class="codepen-button">${pen.text}</button>
		</form>`;

	selector.innerHTML += form;
});
