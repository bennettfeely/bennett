# Image Effects with CSS

![Preview of image effects](http://bennettfeely.com/image-effects/img/preview_4x2.jpg)

## How it works
Using one or more newer CSS properties (`background-blend-mode`, `mix-blend-mode`, or `filter`) gives us a surprising amount of possibilities to manipulate a single source image.

The unedited background-image manipulated using CSS.

In most of these effects the single source image url is repeated one or more times and blended with itself using CSS blend modes (multiply, overlay, screen, difference, etc.)

In some of these effects, the CSS `filter` property is used to further refine the output. Functions like `grayscale()`, `brightness()`, and `contrast()` can and should be tweaked to achieve a better result for images you use.

These effects should be used as a progressive enhancement.
By default, the source image is displayed without any effects. When CSS `@supports` detects support for the required CSS properties and values for an individual effect, then the effect will be enabled. This amounts to a precise, native, and lightweight feature detection.

## Technologies used in this project
* Gulp + [browser-sync](https://www.npmjs.com/package/browser-sync)
* HAML with [gulp-injectfile](https://www.npmjs.com/package/gulp-inject-file) to insert SCSS/CSS snippets into the page.
* SCSS with [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) and minified using [cssnano](https://www.npmjs.com/package/gulp-cssnano).
* Javascript (first real jQuery-less project... please clap).
* [clipboard.js](https://github.com/zenorocha/clipboard.js) for copy to clipboard functionality.
* [masonry.js](https://github.com/desandro/masonry) by Dave Desandro for layout.
* [fastclick.js](https://github.com/ftlabs/fastclick) by FT Labs for a better mobile experience.
* [prism.js](https://github.com/PrismJS/prism) by Lea Verou for syntax highlighting.