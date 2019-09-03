# [President Trump Inaugural Address Generator](http://bennettfeely.com/trumptalk)

![Screenshot of Trump Inaugural Address Generator](http://bennettfeely.com/trumptalk/img/preview.png)

## What is it
This generator takes actual quotes from various Donald Trump speeches, mashing them together, and mixing up random names of adversaries, topics, and people from the election season.

## Technologies used in this project
* Gulp + [browser-sync](https://www.npmjs.com/package/browser-sync)
* HAML with [gulp-injectfile](https://www.npmjs.com/package/gulp-inject-file) to insert the relatively small CSS and JS into the main index.html file.
* SCSS with [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) and minified using [cssnano](https://www.npmjs.com/package/gulp-cssnano).
* jQuery (may work on making this vanilla javascript later, wanted to release it as soon as possible though)
* [realfavicongenerator](http://realfavicongenerator.net/) for all things icons.