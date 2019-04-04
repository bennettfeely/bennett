// ===================================================================================
// Gradients
// Array of all the gradient information
// ===================================================================================
	var gradients = [
		{
			name : 'cool',
			fallback : '#44acab',
			colors : ['#6e40aa', '#6154c8', '#4c6edb', '#368ce1', '#24aad8', '#1ac7c2', '#1ddea3', '#30ee83', '#52f667', '#7ef658']
		},
		{
			name : 'viridis',
			fallback : '#4a7d70',
			colors : ['#440154', '#482475', '#414487', '#355f8d', '#2a788e', '#21908d', '#22a884', '#42be71', '#7ad151', '#bddf26']
		},
		{
			name : 'inferno',
			fallback : '#95483f',
			colors : ['#000004', '#160b39', '#420a68', '#6a176e', '#932667', '#ba3655', '#dd513a', '#f3761b', '#fca50a', '#f6d746']
		},
		{
			name : 'magma',
			fallback : '#944664',
			colors : ['#000004', '#140e36', '#3b0f70', '#641a80', '#8c2981', '#b5367a', '#de4968', '#f66e5c', '#fe9f6d', '#fecf92']
		},
		{
			name : 'plasma',
			fallback : '#a84a73',
			colors : ['#0d0887', '#41049d', '#6a00a8', '#8f0da4', '#b12a90', '#cb4679', '#e16462', '#f1834c', '#fca636', '#fcce25']
		},
		{
			name : 'warm',
			fallback : '#d46d72',
			colors : ['#6e40aa', '#963db3', '#bf3caf', '#e3419e', '#fe4b83', '#ff5e64', '#ff7747', '#fb9633', '#e2b72f', '#c7d63c']
		},
		{
			name : 'spectral',
			fallback : '#c1a082',
			colors : ['#9e0142', '#d13b4b', '#f0704a', '#fcab63', '#fedc8c', '#fbf8b0', '#e0f3a1', '#aadda2', '#69bda9', '#4288b5']
		},
		{
			name : 'rainbow',
			fallback : '#90958a',
			colors : ['#6e40aa', '#be3caf', '#fe4b83', '#ff7747', '#e3b62f', '#b0ef5a', '#53f666', '#1edfa2', '#23acd8', '#4c6fdc']
		},
		{
			name : 'cubehelix',
			fallback : '#727374',
			colors : ['#000000', '#1a1530', '#163d4e', '#1f6642', '#53792f', '#a07949', '#d07e93', '#d09cd9', '#c1caf3', '#d2eeef']
		},
		{
			name : 'RdYlGn',
			fallback : '#bd9f63',
			colors : ['#a50026', '#d3322b', '#f16d43', '#fcab63', '#fedc8c', '#f9f7ae', '#d7ee8e', '#a4d86f', '#64bc61', '#23964f']
		},
		{
			name : 'RdYlBu',
			fallback : '#c49a90',
			colors : ['#a50026', '#d3322b', '#f16d43', '#fcab64', '#fedc90', '#faf8c0', '#dcf1ec', '#abd6e8', '#76abd0', '#4a74b4']
		},
		{
			name : 'PuBuGn',
			fallback : '#7eafc1',
			colors : ['#fff7fb', '#efe7f2', '#dbd8ea', '#bfc9e2', '#98b9d9', '#6aa8cf', '#4096c0', '#1987a0', '#047877', '#016353']
		},
		{
			name : 'YlGnBu',
			fallback : '#78aeb5',
			colors : ['#ffffd9', '#eff9bd', '#d5efb3', '#a9ddb7', '#74c9bd', '#46b4c2', '#2897bf', '#2073b2', '#234ea0', '#1d3185']
		},
		{
			name : 'GnBu',
			fallback : '#87c3c7',
			colors : ['#f7fcf0', '#e5f5df', '#d4eece', '#bde5bf', '#9fd9bb', '#7bcbc4', '#58b7cd', '#399cc6', '#1e7eb7', '#0b60a1']
		},
		{
			name : 'YlOrRd',
			fallback : '#f08b5a',
			colors : ['#ffffcc', '#fff1a9', '#fee087', '#fec966', '#feab4b', '#fd893c', '#fa5c2e', '#ec3023', '#d31121', '#af0225']
		},
		{
			name : 'YlOrBr',
			fallback : '#e6a257',
			colors : ['#ffffe5', '#fff8c4', '#feeba2', '#fed676', '#febb4a', '#fb9a2c', '#ee7919', '#d85b0a', '#b74304', '#8f3204']
		},
		{
			name : 'RdBu',
			fallback : '#a88d9a',
			colors : ['#67001f', '#ab202e', '#d55f50', '#f0a285', '#fad6c3', '#f2efee', '#cde3ee', '#90c2dd', '#4b94c4', '#2265a3']
		},
		{
			name : 'BuGn',
			fallback : '#7fc1a3',
			colors : ['#f7fcfd', '#e8f6f9', '#d5efed', '#b7e4da', '#8fd4c1', '#69c2a3', '#49b17f', '#2f995a', '#157f3c', '#036429']
		},
		{
			name : 'BuPu',
			fallback : '#a896c5',
			colors : ['#f7fcfd', '#e4eff5', '#ccddec', '#b2cae1', '#9cb3d5', '#8f95c6', '#8c74b5', '#8952a5', '#852d8f', '#730f71']
		},
		{
			name : 'PuBu',
			fallback : '#80abcd',
			colors : ['#fff7fb', '#efeaf4', '#dbdaeb', '#bfc9e2', '#9cb9d9', '#72a8cf', '#4494c3', '#1b7db6', '#0668a1', '#045281']
		},
		{
			name : 'RdPu',
			fallback : '#db79ad',
			colors : ['#fff7f3', '#fde4e1', '#fccfcc', '#fbb5bc', '#f993b0', '#f369a3', '#e03f98', '#c11889', '#99037c', '#710174']
		},
		{
			name : 'PuRd',
			fallback : '#d376a8',
			colors : ['#f7f4f9', '#eae3f0', '#dcc9e2', '#d0aad2', '#d08ac2', '#dd63ae', '#e33890', '#d71c6c', '#b80b50', '#8f023a']
		},
		{
			name : 'YlGn',
			fallback : '#88c282',
			colors : ['#ffffe5', '#f7fcc4', '#e4f4ac', '#c7e89b', '#a2d88a', '#78c578', '#4eaf63', '#2f944e', '#15793f', '#036034']
		},
		{
			name : 'OrRd',
			fallback : '#eb8f70',
			colors : ['#fff7ec', '#feebcf', '#fddcaf', '#fdca94', '#fdb07a', '#fa8e5d', '#f16c49', '#e04630', '#c81e13', '#a70403']
		},
		{
			name : 'PiYG',
			fallback : '#bf9f98',
			colors : ['#8e0152', '#c0267e', '#dd72ad', '#f0b2d6', '#fadded', '#f5f3ef', '#e1f2ca', '#b7de88', '#81bb48', '#4f9125']
		},
		{
			name : 'PRGn',
			fallback : '#95989d',
			colors : ['#40004b', '#722e80', '#9a6daa', '#c1a4cd', '#e3d2e6', '#eff0ef', '#d6eed1', '#a2d79f', '#5dad65', '#217939']
		},
		{
			name : 'PuOr',
			fallback : '#bb9283',
			colors : ['#7f3b08', '#b15a09', '#dd841f', '#f8b664', '#fdddb2', '#f3eeea', '#d7d7e9', '#b0aad0', '#8170ad', '#552d84']
		},
		{
			name : 'RdGy',
			fallback : '#b98987',
			colors : ['#67001f', '#ab202e', '#d55f50', '#f0a285', '#fcd8c4', '#faf4f0', '#dfdfdf', '#b8b8b8', '#868686', '#4e4e4e']
		},
		{
			name : 'BrBG',
			fallback : '#96a180',
			colors : ['#543005', '#8b530f', '#bc8434', '#ddbd7b', '#f2e4bf', '#eef1ea', '#c3e7e2', '#80c9bf', '#399890', '#0a675f']
		}
	];


// ===================================================================================
// CSS Gradient
// Prints out raw, unformatted CSS
// ===================================================================================
	function gradientize(colors, fallback) {
		// Create a simple unprefixed CSS gradient
		css = 'background: ' + fallback + ';\n';
		css += 'background-image: linear-gradient(90deg, ';

		// Print out each color with comma and space
		$.each(colors, function(i, color){
			css += color + ', ';

			// Append last color without comma and with closing parentheses
			if (i == 9) { css += color + ');' }
		});

		return css;
	}


// ===================================================================================
// CSS Gradient with Syntax highlighting
// Prints out CSS gradient wrapped with <span>'s for syntax highlighting
// ===================================================================================
	function prettyGradientize(colors, fallback) {
		// Create a simple unprefixed CSS gradient with syntax highlighting
		css = '<span class="prop">background</span>: <span class="color">' + fallback + '</span>;\n';
		css += '<span class="prop">background-image</span>: <span class="function">linear-gradient</span>(<span class="deg">90deg</span>, ';

		// Print out each color with comma and space
		$.each(colors, function(i, color){
			css += '<span class="color">' + color + '</span>, ';

			// Append last color without comma and with closing parentheses
			if (i == 9) { css += '<span class="color">' + color + '</span>' + ');' }
		});

		return css;
	}


// ===================================================================================
// SCSS
// Prints out an array of incremental SCSS color variables
// ===================================================================================
	function scssIze(name, colors, fallback) {
		scss = '<span class="variable">$' + name + '-fallback</span> : <span class="color">' + fallback + '</span>; ';

		$.each(colors, function(i, color){
			scss += '\n<span class="variable">$' + name + '-' + i + '</span> : <span class="color">' + color + '</span>; ';
		});


		css = '<span class="prop">background</span>: <span class="variable">$' + name + '-fallback</span>;\n';
		css += '<span class="prop">background-image</span>: <span class="function">linear-gradient</span>(<span class="deg">90deg</span>, ';
		$.each(colors, function(i, color){
			css += '<span class="variable">$' + name + '-' + i + '</span>, ';

			if (i == 9) { css += '<span class="variable">$' + name + '-' + i + '</span>' + ');' }
		});

		return scss + '\n\n' + css;
	}


// ===================================================================================
// SCSS Array
// Prints out an array of non-variabled colors in SCSS
// ===================================================================================
	function scssArrayIze(name, colors, fallback) {
		// Start array with fallback color and name of array
		scss_array = '<span class="variable">$' + name + '-fallback</span> : <span class="color">' + fallback + '</span>;\n';
		scss_array += '<span class="variable">$' + name + '-array</span> :';

		// Run through each color
		$.each(colors, function(i, color){
			scss_array += ' <span class="color">' + color + '</span>,';

			if (i == 9) {
				scss_array += ' <span class="color">' + color + '</span>;\n\n';
				scss_array += '<span class="prop">background</span>: <span class="variable">$' + name + '-fallback</span>;\n';
				scss_array += '<span class="prop">background-image</span>: <span class="function">linear-gradient</span>(<span class="deg">90deg</span>, <span class="variable">$' + name + '-array</span>);';
			}
		});

		// Close out array variable
		return scss_array;
	}

// ===================================================================================
// JS array
// Prints out a javascript array of colors
// ===================================================================================
	function jsArrayIze(name, colors, fallback) {
		js_array = '';

		// Run through each color and add as JS string in array
		$.each(colors, function(i, color){
			js_array += '<span class="value">\'' + color + '\'</span>, ';

			if (i == 9) {
				js_array += '<span class="value">\'' + color + '\'</span>';
			}
		});

		// Return fallback with completed JS array
		return '<span class="var">var</span> <span class="variable">' + name + '_fallback</span> = <span class="value">\'' + fallback + '\'</span>;\n<span class="var">var</span> <span class="variable">' + name + '_array</span> = [' + js_array + '];';
	}

// ===================================================================================
// List
// Prints out a simple list of colors
// ===================================================================================
	function listIze(colors, fallback) {
		// Start with labels
		listarray = '<span class="comment">Fallback:</span>\n<span class="color">' + fallback + '</span>\n\n<span class="comment">Colors:</span>\n';

		// Run through each color and append syntax highlighting
		$.each(colors, function(i, color){
			listarray += '<span class="color">' + color + '</span> ';
		});

		return listarray;
	}


// ===================================================================================
// Hex to RGB
// Gets an array of color(s) and convert each of them to RGB or HSL
// ===================================================================================
	function notHex(color_array) {
		array = [];

		// Splits each hex color into three r, g, b components
		$.each(color_array, function(i, color) {
	    var color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
	        var r = parseInt(color[1], 16);
	        var g = parseInt(color[2], 16);
	        var b = parseInt(color[3], 16);

	    // Return color in rgb() format, and we are done
	    if (curr_format == 'rgb') {
	    	var color = 'rgb(' + r + ',' + g + ',' + b + ')';
	    }
	    // Convert rgb colors into hsl
	    if (curr_format == 'hsl') {
	    	var color = hsl(r, g, b);
	    }

	    // Restructure colors back into array
			array.push(color);
		});

    return array;
	}


// ===================================================================================
// RGB to HSL
// Convert rgb() colors into hsl()
// ===================================================================================
	function hsl(r, g, b){
		// Convert rgb components to %'s
	  var r = r / 255;
	  var g = g / 255;
	  var b = b / 255;

	  // Get min and max of rgb components
	  var max = Math.max(r, g, b);
	  var min = Math.min(r, g, b);

	  // Get lightness
	  var l = (max + min) / 2;
	  var s = 0;
	  var h = 0;

	  if (max != min){
	    if (l < .5){
	     	s = (max - min) / (max + min);
	    } else {
	     	s = (max - min) / (2 - max - min);
	    }
	    if (r == max){
	     	h = (g - b) / (max - min);
	    } else if (g == max){
	     	h = 2 + (b - r) / (max - min);
	    } else {
	     	h = 4 + (r - g) / (max - min);
	    }
	  }

	  // Round hsl values
	  h = Math.floor(h * 60);
	  s = Math.floor(s * 100) + '%';
	  l = Math.floor(l * 100) + '%';

	  if (h < 0){ h += 360; }

	  // Send out hsl() color
	  return 'hsl(' + h + ',' + s + ',' + l + ')';
	}


// ===================================================================================
// Language change
// Handle click on {CSS, SCSS, SCSS array, JS array, and List} buttons
// ===================================================================================
	function toggleLanguage() {
		$('[data-language]').click(function(){
			var lang = $(this).attr('data-language');

			// If the button clicked isn't on, change the language
			if (lang !== curr_lang) {
				curr_lang = lang;

				// Change button status
				$('[data-language]').removeClass('on');
				$(this).addClass('on');

				// Hide other code blocks, show current one
				$('.gradient-code').removeClass('on');
				$('.gradient-code.' + curr_lang).addClass('on');

				// Hide copy to clipboard button if it is displayed
    		$('.copy').removeClass('is-shown');
			}
		});
	}


// ===================================================================================
// Color format change
// Handle click on {Hex, RGB, HSL} buttons
// ===================================================================================
	function toggleFormat() {
		$('[data-color]').click(function(){
			var format = $(this).attr('data-color');

			// If the button clicked isn't on, change the color format
			if (format !== curr_format) {
				curr_format = format;

				// We need to reload all the gradients
				init();
			}
		});
	}


// ===================================================================================
// Initialize
// Set up all the gradients
// ===================================================================================
	function init() {
		// Clear out all gradients that may be present
		$('.gradients').empty();

		// Run through each gradient in the gradients array
		$.each(gradients, function(i, gradient){

			// Get gradient information
			if (curr_format == 'hex') {
				var fallback = gradient.fallback;
				var colors = gradient.colors;
			} else {
				var colors = notHex(gradient.colors);
				var fallback = notHex([gradient.fallback]);
			}

			// Set up the gradient card in HTML
			var fig = '<div class="box" id="' + gradient.name + '">'
								+ '<figure class="card ' + gradient.name + '">'
									+ '<div class="wrapper">'
										+ '<h2 class="gradient-title container">'
												+ '<a class="local-link" href="#' + gradient.name + '"><span class="name">' + gradient.name + '</span> <span class="hash">#</span></a>'
												+ '<a class="codepen" data-for="' + gradient.name + '">'
													+ '<svg class="icon"><use xlink:href="#codepen-logo"></use></svg>'
													+ 'Open in CodePen'
												+ '</a>'
											+ '</h2>'
										+ '<div class="gradient-preview" style="' + gradientize(colors, fallback) + '"></div>'
											+ '<div class="gradient-output container">'
												+ '<div class="gradient-code css on"><pre class="container">' + prettyGradientize(colors, fallback) + '</pre></div>'
												+ '<div class="gradient-code scss"><pre class="container">' + scssIze(gradient.name, colors, fallback) + '</pre></div>'
												+ '<div class="gradient-code scss-array"><pre class="container">' + scssArrayIze(gradient.name, colors, fallback) + '</pre></div>'
												+ '<div class="gradient-code js-array"><pre class="container">' + jsArrayIze(gradient.name, colors, fallback) + '</pre></div>'
												+ '<div class="gradient-code list"><pre class="container">' + listIze(colors, fallback) + '</pre></div>'
												+ '<a class="copy" data-parent="' + gradient.name + '" data-clipboard-target=".card.' + gradient.name  + ' .gradient-code.on">Copy to Clipboard</a>'
											+ '</div>'
										+ '</div>'
								+ '</figure>'
							+ '</div>';

			// Add gradient card to container
			$(".gradients").append(fig);
		});

		// Change button status
		$('[data-color], [data-language]').removeClass('on');
		$('[data-color="' + curr_format + '"], [data-language="' + curr_lang + '"]').addClass('on');

		// Setup copy to clipboard functionality
		clipBoardize();

		// Setup export to codepen button functionality
		exportCodePen();
	}


// ===================================================================================
// Clipboard
// Setup copy to clipboard functionality
// ===================================================================================
	function clipBoardize() {
		// Select all .copy buttons and add clipboard function
		clipboard = new Clipboard('.copy');

		// Click on code block displays copy to clipboard button
		$('.gradient-code.on').mousedown(function(){

			// Hide any other copy buttons that may be shown currently
    	$('.copy').removeClass('is-shown').text('Copy to Clipboard');

    	// Display copy to clipboard button
    	$(this).siblings('.copy').addClass('is-shown');

    	// Hide copy to cliboard button if mouse is
    	// outside gradient card for more than .5 seconds
			var parent = $('.copy.is-shown').attr('data-parent');
    	$('.' + parent).mouseleave(function(){
    		setTimeout(function(){
    			$('.copy.is-shown').removeClass('is-shown is-copied').text('Copy to Clipboard');
    		}, 500);
    	});

    });

		// Handle result of clipboard button click
    clipboard.on('success', function(e) {
    	// It works, display success message
    	$('.copy.is-shown').addClass('is-copied').text('Copied!');
    });

    // It failed, display fallback message
    clipboard.on('error', function(e) {
    	$('.copy.is-shown').addClass('is-copied').text('Press Ctrl+C to Copy');

    	// Hide button after 2.5 seconds, change text to default failure text
    	setTimeout(function(){
    		$('.copy').removeClass('is-shown is-copied').text('Press Ctrl+C to Copy');
    	}, 2500);
    });
	}


// ===================================================================================
// Export to Codepen
// Setup export to codepen button functionality
// ===================================================================================
	function exportCodePen() {
		// Detect click on export to codepen button
		$('.codepen').click(function(){
			var gradient_name = $(this).attr('data-for');
				var selector = '.' + gradient_name + ' .gradient-code.';

			// Grab current gradient information from code blocks
			var gradient_css = $(selector + 'css').text();
			var gradient_scss = $(selector + 'scss').text();
			var gradient_scss_array = $(selector + 'scss-array').text();
			var gradient_js_array = $(selector + 'js-array').text();
			var gradient_list = $(selector + 'list').text();

			// Default CodePen prefill variables
			var HTML = '';
			var CSS = '';
			var CSS_PRE_PROCESSOR = 'none';
			var JS = '';
			var DESCRIPTION = '\"' + gradient_name + '\" gradient in CSS. Generated from http://bennettfeely.com/csscales.';
			var EDITORS = '';
			var TAGS = [gradient_name, 'gradient', 'scale', 'colors'];

			// Wrap CSS in body tag
			if (curr_lang == 'css') {
				var CSS = 'body {'
          + '\n\t' + gradient_css.replace(/background-image:/g,'\tbackground-image:')
          + '\n\theight: 100vh;'
          + '\n}';
				var EDITORS = '110';
			}

			// Wrap SCSS in body tag
			if (curr_lang == 'scss') {
				var CSS_PRE_PROCESSOR = 'scss';
				var CSS = gradient_scss.replace(/background:/g,'body {\n\tbackground:').replace(/background-image:/g,'\tbackground-image:').replace(/\);/g, '\)\;\n\theight: 100vh;\n}');
				var EDITORS = '110';
			}

			// Return JS array in JS field and CSS gradient in CSS field
			if (curr_lang == 'js-array') {
				var CSS = 'body {'
          + '\n\t' + gradient_css
          + '\n\theight: 100vh;'
          + '\n}';
				var JS = gradient_js_array;
				var EDITORS = '011';
			}

			// Return array of SCSS wrapped in body selector
			if (curr_lang == 'scss-array') {
				var CSS_PRE_PROCESSOR = 'scss';
				var CSS = 'body {'
					+ '\n' + gradient_scss_array.replace(/\$cool/g,'\t\$cool').replace(/background/g,'\tbackground')
					+ '\n\theight: 100vh;'
			 	 	+ '\n}';
				var EDITORS = '110';
			}

			// Return list of colors in HTML comment and CSS in CSS field
			if (curr_lang == 'list') {
				var HTML = '<!--'
					+ '\n' + gradient_list
					+ '\n-->';
				var CSS = 'body {'
          + '\n\t' + gradient_css
          + '\n\theight: 100vh;'
          + '\n}';
				var EDITORS = '110';
			}

			// Setup the final CodePen prefill data
			var data = {
				title							: gradient_name,
		    html              : HTML,
		    css               : CSS,
		    css_pre_processor : CSS_PRE_PROCESSOR,
		    css_prefix        : 'autoprefixer',
		    css_starter       : 'reset',
		    js								: JS,
		    head              : '<meta name="viewport" content="width=device-width">',
		    description       : DESCRIPTION,
		    editors						: EDITORS,
		    tags							: TAGS
		  };

		  // Stringify data for CodePen
		  var JSONstring = JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");

		  // Append hidden form for CodePen prefill submission
		  // Tested and works in Chrome, FF, Safari
		  var $form = $('<form action="http://codepen.io/pen/define" method="POST" target="_blank">'
		           + '<input type="hidden" name="data" value=\'' + JSONstring + '\'>'
		           + '</form>');
		  $('.card.' + gradient_name).append($form);

		  // Submit the form
		  $form.submit();
		});
	}


// ===================================================================================
// Setup
// Startup the process when jQuery is ready
// ===================================================================================
	$(function(){
		// Default color format and language
		curr_format = 'hex';
		curr_lang = 'css';

		// Add fastclick for mobile
    FastClick.attach(document.body);

    // Setup the page
		init();
		toggleLanguage();
		toggleFormat();
	});