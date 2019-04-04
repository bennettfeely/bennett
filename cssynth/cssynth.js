var $html = $("html");
var $body = $("body");
var $text_input = $('input[type="text"]');
var $button_input = $('input[type="checkbox"], input[type="radio"]');

var $tester = $(".tester");
var $figure = $("figure");
var $preprocessor_container = $(".preprocessor");
var $preprocessor = $(".preprocessor textarea");
var $codepen = $("#codepen");

var $pause = $("#pause");

// Defaults

  effect = "random";

  columns = 8;
  rows = 5;

  duration = 2; // seconds
  delay = 150; // milliseconds

  selector = ":nth-child";
  preprocessor = "scss";
  webkit_prefix = true;
  moz_prefix = false;$

  permit = false;
  array = [];


$(function() {
  console.log("$(document).ready();");

  $(window).load(function(){
    $html.addClass("go");
  });

  $(".sidebar-toggle").click(function() {
    $html.toggleClass("slide-left");
  });

  // Code Options
  $('input[name="effect"]').change(effectChange);
  $("#rows, #columns").blur(gridChange);
  $("#delay").blur(delayChange);
  $('input[name="selector"]').change(selectorChange);
  $('input[name="preprocessor"]').change(preprocessorChange);
  $('input[name="prefix"]').change(prefixChange);

  // Animation Options
  $('input[name="animation"]').change(animationChange);
  $("#duration").blur(durationChange);
  $('input[name="misc"]').change(miscChange);

  $pause.click(function(){
    $html.toggleClass("paused");
  });

  if (Modernizr.cssanimations) {
    setup();
  } else {
    $tester.html("<h1>Looks like your browser does not support CSS animations.<br>Try using a modern web browser.</h1>");
    $preprocessor_container.remove();
  }

  $preprocessor_container.hover(function() {
    toggleHoverState();
  }, function(){
    toggleHoverState();
  });

  $codepen.click(codePen);
});




function toggleHoverState(){
  setTimeout(function(){
    $preprocessor_container.toggleClass("pointer-on");
  }, 450);
}


function effectChange() {
  console.log("effectChange();");

  effect = $('input[name="effect"]:checked').attr("id");

  localStorage.setItem("cssyth_effect", effect);

  setup();
}

function gridChange() {
  console.log("gridChange();");

  permit = false;

  setup();
}

function delayChange() {
  console.log("delayChange();");

  var delay_val = $("#delay").val();

  if($.isNumeric(delay_val)) {
    delay = delay_val;

    if(delay < 0){
      $("#negative_delay_tip").css("transform", "scale(0)");
    }

    setup();
  }
}

function selectorChange() {
  console.log("selectorChange();");

  selector = $('input[name="selector"]:checked').next("label").text();

  setup();
}

function preprocessorChange() {
  console.log("preprocessorChange();");

  preprocessor = $('input[name="preprocessor"]:checked').attr("id");

  console.log("poop!");

  setup();
}

function prefixChange() {
  console.log("prefixChange();");

  if($("#webkit").is(":checked")) {
     webkit_prefix = true;
  } else {
     webkit_prefix = false;
  }

  if($("#moz").is(":checked")) {
     moz_prefix = true;
  } else {
     moz_prefix = false;
  }

  setup();
}



function animationChange() {
  console.log("animationChange();");

  var animation = $('input[name="animation"]:checked').attr("data-animation");

  $body.removeAttr("class").addClass(animation);
}



function durationChange() {
  console.log("durationSet();");

  $(".demo_style_block").remove();

  var duration = $("#duration").val();

  var demo_style_block = '<style class="demo_style_block">'
                           + '  .item {'
                           + '    -webkit-animation-duration: ' + duration + 's;'
                           + '    -moz-animation-duration: ' + duration + 's;'
                           + '    animation-duration: ' + duration + 's;'
                           + '  }'
                           + '</style>';

  $body.append(demo_style_block);

  gridCheck();
}


function miscChange() {
  console.log("miscChange();");

  if($("#pics").is(":checked")) {
    $html.addClass("misc-pics");

    pics();
  } else {
    $html.removeClass("misc-pics");
  }

  if($("#dots").is(":checked")) {
    $html.addClass("misc-dots");
  } else {
    $html.removeClass("misc-dots");
  }

  if($("#monochrome").is(":checked")) {
    $html.addClass("misc-monochrome");
  } else {
    $html.removeClass("misc-monochrome");
  }

  if($("#numbers").is(":checked")) {
    $html.addClass("misc-numbers");
  } else {
    $html.removeClass("misc-numbers");
  }
}



function pics() {
  console.log("pics();");

  $(".pics_style").remove();

  var start = Math.floor(Math.random() * 54) * 50;
  nth_pic = '';

  for (i = 0; (i < iterations); i++) {
    var pos = start + (i * 50);

    nth_pic += '.item:nth-child(' + (i + 1) + ') { background-position: ' + pos + 'px 0; }\n';
  }

  $body.append('<style class="pics_style">' + nth_pic + '</style>');
}



function simplize(iterations) {
  console.log("simplize();");

    var webkit = "";
    var moz = "";

    for (i = 0; (i < iterations); i++) {

      if(i > 0) {
        var item_delay = (i * delay) + "ms";
        var property = 'animation-delay: ' + item_delay + ';\n';

        if(webkit_prefix == true){ var webkit = '\t-webkit-' + property; }
        if(moz_prefix == true){ var moz = '\t-moz-' + property; }

        css_style_properties += '.item' + selector + '(' + (i + 1) + ') {\n' + moz + webkit + '\t' + property + '}\n';

        if(preprocessor == "scss") {
          var property = 'animation-delay: $i * ' + delay + 'ms;\n';

          if(webkit_prefix == true){ var webkit = '\t\t-webkit-' + property; }
          if(moz_prefix == true){ var moz = '\t\t-moz-' + property; }
        }
      }

    }

  $body.append('<style class="style">\n' + css_style_properties.replace(/\s+/g, '') + '</style>');

  if(preprocessor == "css") { $preprocessor.text(css_style_properties); }

  if(preprocessor == "scss") {
    var forloop = '@for $i from 1 through ' + (rows * columns) + ' {\n'
                + '\t.item' + selector + '(#{$i}) {\n'
                +  moz + webkit + '\t\t' + property
                + '\t}\n'
                + '}'

    $preprocessor.text(forloop);
  }
}



function randomize(iterations) {
  console.log("randomize();");

  var webkit = "";
  var moz = "";

  for (i = 0; (i < iterations); i++) {

      var item_delay = Math.round(((Math.random() * iterations)) * delay) + "ms";
      var property = 'animation-delay: ' + item_delay + ';\n';

      if(webkit_prefix == true){ var webkit = '\t-webkit-' + property; }
      if(moz_prefix == true){ var moz = '\t-moz-' + property; }

      if(preprocessor == "scss") {
        if(webkit_prefix == true){ var webkit = '\t\t-webkit-' + property; }
        if(moz_prefix == true){ var moz = '\t\t-moz-' + property; }
      }

      css_style_properties += '.item' + selector + '(' + (i + 1) + ') {\n' + moz + webkit + '\t' + property + '}\n';
      scss_style_properties += '\t&' + selector + '(' + (i + 1) + ') {\n' + moz + webkit + '\t\t' + property + '\t}\n';
  }

  $body.append('<style class="style">\n' + css_style_properties + '</style>');

  if(preprocessor == "css") { $preprocessor.text(css_style_properties); }
  if(preprocessor == "scss") { $preprocessor.text('.item {\n' + scss_style_properties + '}'); }
}



function rowize(iterations) {
  console.log("rowize();");

  var webkit = "";
  var moz = "";

  for (i = 0; (i < columns); i++) {

    if(i > 0) {
      var row = (rows * i) + 1;

      var item_delay = (i * delay) + "ms";
      var property = 'animation-delay: ' + item_delay + ';\n';

      if(webkit_prefix == true){ var webkit = '\t-webkit-' + property; }
      if(moz_prefix == true){ var moz = '\t-moz-' + property; }

      if(preprocessor == "scss") {
        if(webkit_prefix == true){ var webkit = '\t\t-webkit-' + property; }
        if(moz_prefix == true){ var moz = '\t\t-moz-' + property; }
      }

      css_style_properties += '.item' + selector + '(n+' + row + ') {\n' + moz + webkit + '\t' + property + '}\n';
      scss_style_properties += '\t&' + selector + '(n+' + row + ') {\n' + moz + webkit + '\t\t' + property + '\t}\n';
    }

  }

  $body.append('<style class="style">\n' + css_style_properties + '</style>');

  if(preprocessor == "css") { $preprocessor.text(css_style_properties); }
  if(preprocessor == "scss") { $preprocessor.text('.item {\n' + scss_style_properties + '}'); }
}



function columnize(iterations) {
  console.log("columnize();");

  var webkit = "";
  var moz = "";

  for (i = 0; (i < rows); i++) {

    if(i > 0) {
      var item_delay = (i * delay) + "ms";
      var property = 'animation-delay: ' + item_delay + ';\n';

      if(webkit_prefix == true){ var webkit = '\t-webkit-' + property; }
      if(moz_prefix == true){ var moz = '\t-moz-' + property; }

      if(preprocessor == "scss") {
        if(webkit_prefix == true){ var webkit = '\t\t-webkit-' + property; }
        if(moz_prefix == true){ var moz = '\t\t-moz-' + property; }
      }

      css_style_properties += '.item' + selector + '(' + rows + 'n+' + (i + 1) + ') {\n' + moz + webkit + '\t' + property + '}\n';
      scss_style_properties += '\t&' + selector + '(' + rows + 'n+' + (i + 1) + ') {\n' + moz + webkit + '\t\t' + property + '\t}\n';

    }

    $body.append('<style class="style">\n' + css_style_properties + '</style>');

    if(preprocessor == "css") { $preprocessor.text(css_style_properties); }
    if(preprocessor == "scss") { $preprocessor.text('.item {\n' + scss_style_properties + '}'); }
  }
}



function customize() {
  console.log("customize();");

  $(".style").remove();
  custom_nth = 0;

  $html.addClass("customize");
  $body.removeClass();

  listenItem();

  $(".generate").one("click", function(){
    console.log(webkit_prefix);

    $.each(array, function(i, nth){

      var webkit = "";
      var moz = "";

      if(i > 0) {
        var item_delay = ((i-1) * delay) + "ms";
        var property = 'animation-delay: ' + item_delay + ';\n';

        if(webkit_prefix == true){ var webkit = '\t-webkit-' + property; }
        if(moz_prefix == true){ var moz = '\t-moz-' + property; }

        if(preprocessor == "scss") {
          if(webkit_prefix == true){ var webkit = '\t\t-webkit-' + property; }
          if(moz_prefix == true){ var moz = '\t\t-moz-' + property; }
        }

        console.log(webkit);

        css_style_properties += '.item' + selector + '(' + nth + ') {\n' + moz + webkit + '\t' + property + '}\n';
        scss_style_properties += '\t&' + selector + '(' + nth + ') {\n' + moz + webkit + '\t\t' + property + '\t}\n';
      }
    });


    $body.append('<style class="style">\n' + css_style_properties + '</style>');

    if(preprocessor == "css") { $preprocessor.text(css_style_properties); }
    if(preprocessor == "scss") { $preprocessor.text('.item {\n' + scss_style_properties + '}'); }

    $html.removeClass("customize");

    gridRefresh();
  });
}


function listenItem(){
  $(".item").mousedown(function(){
    var $this = $(this);

    selectItem($this);

    $(".item").mouseover(function(){
      var $this = $(this);

      selectItem($this);
    });

    $html.mouseup(function(){
      $(".item").unbind("mouseover");
    });
  });
}



function selectItem($this){
  var nth = $this.attr("data-nth");

  if(!$this.hasClass("selected")){

    custom_nth++;

    $this.addClass("selected").attr("data-custom-nth", custom_nth);

    array.push(nth);
  }
}



function gridCheck() {
  console.log("gridCheck();");

  $html.removeClass("grid-overflow");

  var oldtotal = $(".item").length;

  rows = $("#rows").val();
  columns = $("#columns").val();

  if(rows <= 0 || rows == '') {
    $("#rows").val("1");
    rows = 1;
  }
  if(columns <= 0 || columns == '') {
    $("#columns").val("1");
    columns = 1;
  }

  var total = rows * columns;

  console.log('old: ' + oldtotal +  ' new: ' + total);

  if(oldtotal < total) {
    if($html.hasClass("misc-pics")){
      pics();
    }
  }

    if(permit == false) {
      console.log("permit == false;");

      if(total > 100) {
        console.log("total > 150");
        $html.addClass("grid-overflow");

        var alert = 'You\'re about to animate a whopping <b>' + total + '</b> elements. '
                  + 'This could slow or crash your browser. Are you sure you want to do this?'

        $(".grid-alert .message").html(alert);


        $(".run").click(function() {
          $html.addClass("small").removeClass("grid-overflow");

          gridRefresh();

          permit = true;
        });

      } else {
        console.log("total < 150");

        $html.removeClass("small");
        gridRefresh();
      }

  } else {
    console.log("permit == true;");

    gridRefresh();
  }
}



function gridRefresh() {
  $figure.empty();

    // Start a loop to populate the figure
    for (i = 0; (i < rows*columns); i++) {
      $figure.append('\t<div class="item" data-nth="' + (i + 1) + '"></div>\n');
    }

    var width = rows + "em";
    var height = columns + "em";

    $figure.css({
      "width" : width,
      "height" : height
    });

    if($html.hasClass("customize")){
      customize();
    }
}



function setup() {
  console.log("setup();");

  $(".style").remove();
  $html.removeClass("customize paused");

  css_style_properties = "";
  scss_style_properties = "";

  rows = $("#rows").val();
  columns = $("#columns").val();

  iterations = rows * columns;

  gridCheck();

  if(effect == "none") {
    $preprocessor.html("/* There\'s nothing here! */");
    $(".style").remove();
  }
  if(effect == "simple") { simplize(iterations); }
  if(effect == "random") { randomize(iterations); }
  if(effect == "row")    { rowize(iterations); }
  if(effect == "column") { columnize(iterations); }
  if(effect == "custom") { customize(iterations); }

  animatepreprocessor();
}

function animatepreprocessor() {
  $html.addClass("new-output");

  setTimeout(function() {
    $html.removeClass("new-output");
  }, 500);
}


function codePen() {
  console.log("codePen();");

  var webkit = "";
  var moz = "";

  // Get clean HTMl
  $(".item").removeAttr("data-nth data-custom-nth style");
  var HTML = '<div class="container">\n' + $("figure").html() + '</div>';

  // Get CSS stripped of class
  var CSS = $("textarea").text().replace(".item {\n","");


  // Set Animation Property
  var animation_name = $("body").attr("class");
  var animation_property = '\tanimation: ' + animation_name + ' ' + duration + 's infinite both;\n';

  if(moz_prefix == true){
    var moz = '\t-moz-animation: ' + animation_name + ' ' + duration + 's infinite both;\n'; }
  if(webkit_prefix == true){
    var webkit = '\t-webkit-animation: ' + animation_name + ' ' + duration + 's infinite both;\n'; }

  var animation_property = moz + webkit + animation_property;

  var keyframes = keyFramer(animation_name);

  console.log(keyframes);

  var baseCSS = "";
  var postCSS = '.container {\n'
              + '\twidth: ' + (rows * 50) + 'px;\n'
              + '\theight: ' + (columns * 50) + 'px;\n'
              + '\tmargin: 0 auto;\n'
              + '\toverflow: hidden;\n'
              + '}\n'
              + '\n'
              + '.item {\n'
              + '\tfloat: left;\n'
              + '\twidth: 50px;\n'
              + '\theight: 50px;\n'
              + '\tbackground: #E7E6DD;\n'
              + animation_property
              + '}\n';
              + '\n'


  if(preprocessor == "scss") {
    var baseCSS = '.item {\n'
              + animation_property
              + '\n';

      if(effect == "simple") {
        var baseCSS = '.item {\n'
                    + animation_property
                    + '}\n'
                    + '\n';
      }

    var postCSS = '$size : 50px;\n'
                + '$color : #E7E6DD;\n'
                + '\n'
                + '.container {\n'
                + '\twidth: $size*' + rows + ';\n'
                + '\theight: $size*' + columns + ';\n'
                + '\tmargin: 0 auto;\n'
                + '\toverflow: hidden;\n'
                + '}\n'
                + '\n'
                + '.item {\n'
                + '\tfloat: left;\n'
                + '\twidth: $size;\n'
                + '\theight: $size;\n'
                + '\tbackground: $color;\n'
                + '}\n'
                + '\n'

  }

  var data = {
    html              : HTML,
    css               : postCSS + baseCSS + CSS + keyframes,
    css_pre_processor : preprocessor,
    css_starter       : "reset",
    css_prefix_free   : "true"
  };

  console.log(data);

  var json = JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");

  $codepen.before('<input type="hidden" name="data" value=\'' + json + '\'>');

  $("form").submit();
}


function keyFramer(animation_name) {

  if(animation_name == "zoom-out") {
    var frame = '\tfrom, to {\n'
              + '\t\ttransform: scale3d(0,0,0);\n'
              + '\t}\n'
              + '\t45%,55% {\n'
              + '\t\ttransform: scale3d(1,1,1);\n'
              + '\t}\n'
  }

  if(animation_name == "horizontal-flip") {
    var frame = '\tfrom {\n'
              + '\t\ttransform: perspective(500);\n'
              + '\t}\n'
              + '\tto {\n'
              + '\t\ttransform: perspective(500) rotate3d(0,1,0,1turn);\n'
              + '\t}\n'
  }

  if(animation_name == "vertical-flip") {
    var frame = '\tfrom {\n'
              + '\t\ttransform: perspective(500);\n'
              + '\t}\n'
              + '\tto {\n'
              + '\t\ttransform: perspective(500) rotate3d(1,0,0,1turn);\n'
              + '\t}\n'
  }

  if(animation_name == "spin") {
    var frame = '\tfrom, to {\n'
              + '\t\ttransform: rotate3d(0,0,1,0);\n'
              + '\t}\n'
              + '\t50% {\n'
              + '\t\ttransform: rotate3d(0,0,1,1turn);\n'
              + '\t}\n'
  }

  if(animation_name == "opacity") {
    var frame = '\tfrom, to {\n'
              + '\t\topacity: 0;\n'
              + '\t}\n'
              + '\t50% {\n'
              + '\t\topacity: 1;\n'
              + '\t}\n'
  }

  if(animation_name == "disco") {
    var frame = '\tfrom, to { background: purple; }\n'
              + '\t20% { background: red; }\n'
              + '\t40% { background: gold; }\n'
              + '\t60% { background: limegreen; }\n'
              + '\t80% { background: dodgerblue; }\n';
  }

  var keyframes = '\n\n@keyframes ' + animation_name + ' {\n'
                + frame
                + '}';

  var moz = "";
  var webkit = "";

  if(moz_prefix == true) {
    var moz = keyframes.replace(/transform/g,"-moz-transform").replace(/keyframes/g,"-moz-keyframes");
  }
  if(webkit_prefix == true) {
    var webkit = keyframes.replace(/transform/g,"-webkit-transform").replace(/keyframes/g,"-webkit-keyframes");
  }

  var keyframes = moz + webkit + keyframes;

  return keyframes;
}

