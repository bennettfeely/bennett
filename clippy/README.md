[Clippy](http://bennettfeely.com/clippy)
======

<img width="300" height="225" style="margin-right:20px;" src="https://d13yacurqjgara.cloudfront.net/users/19965/screenshots/1757798/screen_shot_2014-10-08_at_4.39.02_pm.png" />
<img width="300" height="225" src="https://d13yacurqjgara.cloudfront.net/users/19965/screenshots/1672225/screen_shot_2014-08-05_at_4.26.43_pm.png" />

Shape up your website with CSS clip-paths!

Clippy is a tool for generating values for shape functions for the new and cool CSS clip-path property. The property accepts several basic shapes that will be able to create with Clippy and their current implementation status:

* `circle()` Currently disabled, still buggy when using a ratio that's not 1:1.
* `ellipse()` Improved, handles now switch to best side.
* `polygon()` Includes common preset shapes plus the ability to create a custom shape
* `inset()` Improved, now supports radius value


#### Details
* Utilizes [draggabilly.js](https://github.com/desandro/draggabilly) for the handles which each correspond to a point for CSS clip path. Works really well on touch devices, especially with the `touch-action: none`.
* For development, using Grunt with SCSS, autoprefixer, uncss, minification for CSS, HTML, and javascript.
* Material-ish design inspiration.
* Mobile-first design, making things work great on mobile touch devices first and working responsively upwards from there.


#### To do

* `Done` Enabled `ellipse()` shape.
* `Done` Button to remove an added point for `polygon()` shapes (@razvancaliman suggestion)
* `Done` Make a panel card with quick information about the `clip-path` property.
* `Done` Add ability to make custom shapes
* `Done` Add radius support for `inset` shape.
* `Working on` Fixing `circle()` shape with ratio that isn't 11
* `Looking into` Support values out of bounds (@thebabydino suggestion)
* `Looking into` Add HTML5 localstorage to save things.
* `Looking into` See how Clippy could be used with [CSS Shapes module](http://dev.w3.org/csswg/css-shapes/#basic-shape-functions)

***

#### Browser Support for Clip Path

[caniuse.com](http://caniuse.com/#search=clip-path)

***

#### List of names of polygons (3-100 sides)

Triangle, Quadrilateral, Pentagon, Hexagon, Heptagon, Octagon, Nonagon, Decagon, Hendecagon, Dodecagon, Tridecagon, Tetradecagon, Pentadecagon, Hexadecagon, Heptadecagon, Octadecagon, Nonadecagon, Icosagon, Icosagon, Icosikaihenagon, Icosikaidigon, Icosikaitrigon, Icosikaitetragon, Icosikaipentagon, Icosikaihexagon, Icosikaiheptagon, Icosikaioctagon, Icosikaienneagon, Triacontagon, Triacontakaihenagon, Triacontakaidigon, Triacontakaitrigon, Triacontakaitetragon, Triacontakaipentagon, Triacontakaihexagon, Triacontakaiheptagon, Triacontakaioctagon, Triacontakaienneagon, Tetracontagon, Tetracontakaihenagon, Tetracontakaidigon, Tetracontakaitrigon, Tetracontakaitetragon, Tetracontakaipentagon, Tetracontakaihexagon, Tetracontakaiheptagon, Tetracontakaioctagon, Tetracontakaienneagon, Pentacontagon, Pentacontakaihenagon, Pentacontakaidigon, Pentacontakaitrigon, Pentacontakaitetragon, Pentacontakaipentagon, Pentacontakaihexagon, Pentacontakaiheptagon, Pentacontakaioctagon, Pentacontakaienneagon, Hexacontagon, Hexacontakaihenagon, Hexacontakaidigon, Hexacontakaitrigon, Hexacontakaitetragon, Hexacontakaipentagon, Hexacontakaihexagon, Hexacontakaiheptagon, Hexacontakaioctagon, Hexacontakaienneagon, Heptacontagon, Heptacontakaihenagon, Heptacontakaidigon, Heptacontakaitrigon, Heptacontakaitetragon, Heptacontakaipentagon, Heptacontakaihexagon, Heptacontakaiheptagon, Heptacontakaioctagon, Heptacontakaienneagon, Octacontagon, Octacontakaihenagon, Octacontakaidigon, Octacontakaitrigon, Octacontakaitetragon, Octacontakaipentagon, Octacontakaihexagon, Octacontakaiheptagon, Octacontakaioctagon, Octacontakaienneagon, Enneacontagon, Enneacontakaihenagon, Enneacontakaidigon, Enneacontakaitrigon, Enneacontakaitetragon, Enneacontakaipentagon, Enneacontakaihexagon, Enneacontakaiheptagon, Enneacontakaioctagon, Enneacontakaienneagon, Hectogon
