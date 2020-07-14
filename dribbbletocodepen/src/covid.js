// COVID Tracking ======================================================
var source = {
	url: "https://covidtracking.com/api/v1/us/current.json",
	row: "covidtracking",
};

console.log("helo");

fetch(source.url)
	.then((response) => response.json())
	.then(function (data) {
		var data = data[0];

		fill(source.row, "deaths", data.death);
		fill(source.row, "hospitalized", data.hospitalized);
	});

function fill(row, cell, datum) {
	document.querySelector("." + row + " ." + cell).innerHTML = datum;
}

var eg = [
	{
		date: 20200712,
		states: 56,
		positive: 3291969,
		negative: 36990207,
		pending: 2639,
		hospitalizedCurrently: 52578,
		hospitalizedCumulative: 263651,
		inIcuCurrently: 5919,
		inIcuCumulative: 11679,
		onVentilatorCurrently: 2182,
		onVentilatorCumulative: 1136,
		recovered: 1006326,
		dateChecked: "2020-07-12T00:00:00Z",
		death: 127677,
		hospitalized: 263651,
		lastModified: "2020-07-12T00:00:00Z",
		total: 40284815,
		totalTestResults: 40282176,
		posNeg: 40282176,
		deathIncrease: 476,
		hospitalizedIncrease: 939,
		negativeIncrease: 667803,
		positiveIncrease: 60978,
		totalTestResultsIncrease: 728781,
		hash: "b54a9db52f34cf994d9feb257d49daf9faed3e37",
	},
];
