var color_list = [
	"#4e79a7",
	"#f28e2c",
	"#e15759",
	"#76b7b2",
	"#59a14f",
	"#edc949",
	"#af7aa1",
	"#ff9da7",
	"#9c755f",
	"#bab0ab",
	"#253a50",
	"#954f09",
	"#9d1c1e",
	"#3c726e",
	"#2a4b25",
	"#a68510",
	"#6a405f",
	"#ff1e35",
	"#4d3a2f",
	"#7e6f68",
	"#a1b9d3",
	"#f9cea4",
	"#f4c3c4",
	"#cae3e1",
	"#a5d09f",
	"#f8ebbd",
	"#dfcad9",
	"#ffdfe3",
	"#cdb9ad",
	"#e8e5e3"
];

var sample = [
	{
		color: "",
		name: "Coal",
		value: 38
	},
	{
		color: "",
		name: "Natural Gas",
		value: 23
	},
	{
		color: "",
		name: "Hydro",
		value: 16
	},
	{
		color: "",
		name: "Nuclear",
		value: 10
	},
	{
		color: "",
		name: "Renewable",
		value: 6
	},
	{
		color: "",
		name: "Other",
		value: 7
	}
];

init();

function init() {
	buildData(sample);

	collectData();
}

function buildData(dataset) {
	dataset.forEach((data, i) => {
		appendRow(data, i);
	});
}

// Listen to click on add row button and append another row
document.querySelector(".add-row").addEventListener("click", appendRow);

function appendRow(data, i) {
	// If adding another row, count the number of rows we already have to set a color
	if (i === undefined) {
		var manual_add = true;
		var i = document.querySelectorAll("tbody tr").length;
	}

	data.color = color_list[i];
	data.name = data.name || "";
	data.value = data.value || "";

	// Create a random row id so the remove row button works
	var row_id =
		"row-" +
		Math.random()
			.toString(36)
			.substring(2, 10);

	// prettier-ignore
	var row = '<tr id="' + row_id +'">'
			+ '<td class="color-column">'
				+ '<input onchange="collectData()" type="color" value="' + data.color +'">'
			+ '</td>'
			+ '<td class="name-column">'
				+ '<input onkeyup="collectData()" type="text" value="' + data.name +'" spellcheck="false" autocomplete="off">'
			+ '</td>'
			+ '<td class="value-column">'
				+ '<input onkeyup="collectData()" type="text" value="' + data.value +'" spellcheck="false" autocomplete="off" inputmode="numeric" pattern="[0-9]+([,\.][0-9]+)?">'
			+ '</td>'
			+ '<td class="remove-row-column">'
				+ '<button onclick="removeRow(\'' + row_id + '\');collectData();" class="remove-row">&times;</button>'
			+ '</td>'
		+ '</tr>';

	document.querySelector("tbody").insertAdjacentHTML("beforeend", row);

	if (manual_add == true) {
		document.querySelector("tr:last-child .name-column input").focus();
	}
}

function removeRow(row_id) {
	var remove = document.querySelector("#" + row_id);
	remove.parentNode.removeChild(remove);
}

function collectData() {
	// Iterate through table and get values
	var dataset = sample;
	var temp_dataset = [];
	temp_sum = 0;

	document.querySelectorAll("tbody tr").forEach(data => {
		var color = data.children[0].children[0].value;
		var name = data.children[1].children[0].value;
		var value = parseFloat(
			data.children[2].children[0].value.replace(/\,/g, "")
		);

		// Prevent negative values
		if (value < 0) {
			value = 0;
		}

		if (name !== "" && isNaN(value) == false) {
			temp_sum += value;

			var dataset_fraction = {
				color: color,
				name: name,
				value: value
			};

			temp_dataset.push(dataset_fraction);
		}
	});

	buildChart(temp_dataset, temp_sum);
}

function buildChart(dataset, sum) {
	temp_data = dataset;

	// Determine if we're going to minify the output
	if (document.querySelector(".output-minify").checked == true) {
		var minify = true;
	}

	// Iterate through dataset and append data.pct value
	temp_data.forEach(data => {
		// Calculate pct and round to 3 decimal places
		data.pct = (data.value / sum).toFixed(3);
	});

	// Iterate through data and build CSS Gradient
	temp_pct_sum = 0;
	temp_gradient = "";
	temp_figcaption = "";
	temp_data.forEach(data => {
		temp_pct_sum += data.pct * 100;

		// Max out gradient stop at 100%
		if (temp_pct_sum > 100) {
			temp_pct_sum = 100;
		}

		// prettier-ignore
		var gradient_fraction =
			'\t\t\t\t' + data.color + ' 0,'
			+ '\n\t\t\t\t' + data.color +
			' ' + Math.round(temp_pct_sum * 1000)/1000 +
			'%,\n';

		// prettier-ignore
		var figcaption_fraction = '\t\t' + data.name + ' ' + data.value 
			+ '<span style=\"color:' + data.color + '\">&FilledSmallSquare;</span>'
			+ '<br>\n';

		temp_gradient += gradient_fraction;
		temp_figcaption += figcaption_fraction;
	});

	// Get title if field isn't blank
	var figure_title = document.querySelector(".chart-title").value;
	if (figure_title !== "") {
		if (minify == true) {
			var figure_title = "<h2>" + figure_title + "</h2>";
			var figure_title_css =
				".pie-chart h2{position:absolute;margin:1rem}";
		} else {
			var figure_title = "\t<h2>" + figure_title + "</h2>\n";
			// prettier-ignore
			var figure_title_css = '\t.pie-chart h2 {\n'
				+ '\t\tposition: absolute;\n'
				+ '\t\tmargin: 1rem;\n'
				+'\t}\n';
		}
	} else {
		var figure_title = "";
		var figure_title_css = "";
	}

	// Get source if field isn't blank
	var figure_source = document.querySelector(".chart-source").value;
	if (figure_source !== "") {
		if (minify == true) {
			var figure_source = "<cite>" + figure_source + "</cite>";
			var figure_source_css =
				".pie-chart cite{position:absolute;bottom:0;font-size:80%;padding:1rem;color:gray}";
		} else {
			var figure_source = "\t<cite>" + figure_source + "</cite>\n";
			// prettier-ignore
			var figure_source_css = '\t.pie-chart cite {\n'
				+ '\t\tposition: absolute;\n'
				+ '\t\tbottom: 0;\n'
				+ '\t\tfont-size: 80%;\n'
				+ '\t\tpadding: 1rem;\n'
				+ '\t\tcolor: gray;\n'
				+ '\t}\n';
		}
	} else {
		var figure_source = "";
		var figure_source_css = "";
	}

	// Remove trailing comma in conical gradient value
	var temp_gradient = temp_gradient.slice(0, -2);

	// Get size of pie chart
	var chart_size = document.querySelector(".chart-size").value;

	document.querySelector(".chart-size-display").innerHTML = chart_size + "%";

	if (chart_size > 0) {
		chart_size += "%";
	}
	if (chart_size < 10) {
		chart_size += "%";
	}

	// Get rotation of pie chart
	var chart_rotation = document.querySelector(".chart-rotation").value;

	document.querySelector(".chart-rotation-display").innerHTML =
		chart_rotation + " deg";

	if (chart_rotation > 0 && chart_rotation < 360) {
		var temp_rotation = "\t\t\t\tfrom " + chart_rotation + "deg,\n";
		var temp_rotation_min = "from " + chart_rotation + "deg,";
	} else {
		var temp_rotation = "";
		var temp_rotation_min = "";
	}

	// Generate CSS for pie chart background
	// prettier-ignore
	if (minify == true) {
		var chart_css = '.pie-chart{background:radial-gradient(circle closest-side,transparent ' + chart_size + ',#fff 0),conic-gradient(' + temp_rotation_min + temp_gradient + ');position:relative;width:500px;min-height:350px;margin:0;outline:1px solid #ccc}';
	} else {
	var chart_css = '.pie-chart {\n' 
		+ '\t\tbackground:\n'
		+ '\t\t\tradial-gradient(\n'
		+ '\t\t\t\tcircle closest-side,\n' 
		+ '\t\t\t\ttransparent ' + chart_size + ',\n'
		+ '\t\t\t\twhite 0\n'
		+ '\t\t\t),\n'
		+ '\t\t\tconic-gradient(\n'
		+ temp_rotation 
		+ temp_gradient + '\n'
		+ '\t\t);\n'
		+ '\t\tposition: relative;\n'
		+ '\t\twidth: 500px;\n'		
		+ '\t\tmin-height: 350px;\n'		
		+ '\t\tmargin: 0;\n'
		+ '\t\toutline: 1px solid #ccc;\n'		
		+ '\t}\n';
	}

	// Generate CSS for figcaption
	if (minify == true) {
		var figcaption_css =
			".pie-chart figcaption{position:absolute;bottom:1em;right:1em;font-size:smaller;text-align:right}";
	} else {
		// prettier-ignore
		var figcaption_css = '\t.pie-chart figcaption {\n'
				+ '\t\tposition: absolute;\n'
				+ '\t\tbottom: 1em;\n'
				+ '\t\tright: 1em;\n'
				+ '\t\tfont-size: smaller;\n'
				+ '\t\ttext-align: right;\n'
				+ '\t}';
	}

	// Group all CSS together for insertion in <style> tag
	var pie_css =
		chart_css + figure_title_css + figure_source_css + figcaption_css;

	// prettier-ignore
	var pie_html =
		'<figure class="pie-chart">\n'
		+ figure_title
		+ "\t<figcaption>\n"
		+ temp_figcaption.slice(0, -5)
		+ "\n\t</figcaption>\n"
		+ figure_source
		+ "</figure>";

	if (minify == true) {
		var pie_html = minifyData(pie_html);
		var pie_css = minifyData(pie_css);

		var pie_preview = "<style>" + pie_css + "</style>" + pie_html;
	} else {
		// Generate markup for preview
		// prettier-ignore
		var pie_preview =
		'<style>\n\t' 
		+ pie_css
		+ '\n</style>\n' 
		+ pie_html;
	}

	var kb = (pie_preview.length / 1000).toFixed(2);

	document.querySelector(".output-bytes").innerHTML = kb + " kb";

	// Add generated HTML to textarea and output
	document.querySelector(".output textarea").value = pie_preview;
	document.querySelector(".pie-chart-wrapper").innerHTML = pie_preview;
	// document.querySelector(".pie-chart-wrapper-mini").innerHTML = pie_preview;

	// Gather Data for CodePen export
	// prettier-ignore
	var codepen_obj = { 
		description: 'Pie chart generated using CSS conic-gradients. Generated from https://bennettfeely.com/csspiechart.',
		tags: ["css", "pie chart", "conic-gradient", "chart", "data"],
		editors: 110,
		layout: "left",
		html: pie_html,
		css: pie_css.replace(/\n\t/g, "\n"),
	};

	setupCodePenExport(codepen_obj);
}

function minifyData(output) {
	return output
		.replace(/\n/g, "")
		.replace(/\t/g, "")
		.replace(/ {/g, "{")
		.replace(/;}/g, "}");
}

function setupCodePenExport(codepen_obj) {
	var JSONstring = JSON.stringify(codepen_obj)
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");

	// prettier-ignore
	var form = '<form action="https://codepen.io/pen/define" method="POST" target="_blank">' 
	+ '<input type="hidden" name="data" value=\'' + JSONstring + '\'>'
	+ '<button type="submit" class="button"><svg class="codepen-icon icon" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z"/></svg>' 
	+ 'Open'
	+ '</button>'
  	+ '</form>';

	// Update CodePen button
	document.querySelector(".output-codepen").innerHTML = form;
}

function stringify(data) {
	var stringify = JSON.stringify(data)
		.replace(/"/g, "&​quot;")
		.replace(/'/g, "&apos;");
}
