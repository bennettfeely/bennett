// ===================================================================================
// Masonry ===========================================================================
  var grid = document.querySelector('.grid');
  var msnry = new Masonry( '.grid', {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    transitionDuration: 0
  });

  layout();

  setTimeout(function(){
    layout();
  }, 1000);

  function layout() {
    msnry.layout();
  }




// ===================================================================================
// Random shares generator ===========================================================
  // Just setting a random number to
  // whatever I feel like.
  // Deal with it.
  var twitter_shares = document.getElementById('twitter_shares');
  var facebook_shares = document.getElementById('facebook_shares');

  function randomNumber(approx) {
    return Math.floor((Math.random() * (approx/2)) + approx);
  }

  twitter_shares.innerHTML = randomNumber(800);
  facebook_shares.innerHTML = randomNumber(450);


// ===================================================================================
// Clipboard =========================================================================
  var clipboard = new Clipboard('.copy');
  clipboard.on('success', function(e) {
      e.trigger.innerHTML = 'Copied!';

      setTimeout(function(){
        e.trigger.innerHTML = '<svg class="icon"><use xlink:href="#copy-icon"></use></svg>Copy';
      }, 1000);
  });


// ===================================================================================
// Toggles ===========================================================================
  var options = document.getElementsByClassName('options');
  var css_toggle = document.getElementsByClassName('css-toggle');
  var scss_toggle = document.getElementsByClassName('scss-toggle');

  function toggleStyles() {
    layout();

    var options = this.parentNode;
    var figcaption = options.parentNode;
    var toggle = options.childNodes;
    var article = figcaption.parentNode.parentNode;

    var effect_name = article.getAttribute('id');

    var css_toggle = toggle[0];
        css_toggle.classList.toggle('on');
    var scss_toggle = toggle[2];
        scss_toggle.classList.toggle('on');
    var copy = toggle[6];

    var css = options.parentNode.childNodes[0];
    var scss = options.parentNode.childNodes[1];

    if(css_toggle.classList.contains('on')) {
      figcaption.classList.add('showing-css');
      figcaption.classList.remove('showing-scss');
      copy.setAttribute('data-clipboard-target', '#' + effect_name + '_css');
    }
    if(scss_toggle.classList.contains('on')) {
      figcaption.classList.add('showing-scss');
      figcaption.classList.remove('showing-css');
      copy.setAttribute('data-clipboard-target', '#' + effect_name + '_scss');
    }

    msnry.reloadItems();
    msnry.layout();
  };

  for (var i = 0; i < options.length; i++) {
    css_toggle[i].addEventListener('click', toggleStyles, false);
    scss_toggle[i].addEventListener('click', toggleStyles, false);
  }


// ===================================================================================
// Export to CodePen =================================================================
  function exportCodePen() {
    console.log('exportCodePen();')

    var img_src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Point_Reyes_Lighthouse_%28April_2012%29.jpg/593px-Point_Reyes_Lighthouse_%28April_2012%29.jpg';

    var class_name = this.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
    var HTML = '<div class="' + class_name + '-effect">\n\t<img src="' + img_src + '">\n</div>';
    var options = this.parentNode;
    var toggle = this.parentNode.childNodes;
      var css_toggle = toggle[0];
      var scss_toggle = toggle[2];
    var code = this.parentNode.parentNode.childNodes;
      var effect_css = code[0].textContent;
      var effect_scss = code[1].textContent;

    // Get Current CSS preprocessor
    if(css_toggle.classList.contains('on')) {
      var CSS_PRE_PROCESSOR = 'none';
      var CSS = effect_css;
    }
    if(scss_toggle.classList.contains('on')) {
      var CSS_PRE_PROCESSOR = 'scss';
      var CSS = effect_scss + '\n';
    }

    CSS = CSS.replace(/photo\.jpg/g, img_src);
    CSS += '\n[class$=-effect] img {\n\tvertical-align: top !important;\n\tmargin: 0 !important;\n\topacity: 0 !important;\n}\n';
    CSS += '\n/* CodePen Styles */\nbody {\n\tdisplay: flex;\n\theight: 100vh;\n}\ndiv {\n\tmargin: auto;\n}';

    var data = {
      head                : '<meta name="viewport" content="width=device-width">',
      description         : 'More CSS image effects at http://bennettfeely.com/images',
      html                : HTML,
      css                 : CSS,
      css_pre_processor   : CSS_PRE_PROCESSOR,
      css_starter         : 'reset',
      editors             : '110',
    }

    var JSONstring = JSON.stringify(data).replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    var form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', 'http://codepen.io/pen/define');
        form.setAttribute('target', '_blank');
        form.setAttribute('style', 'display: none');
        form.innerHTML = '<input type="hidden" name="data" value=\'' + JSONstring + '\'>';

    this.appendChild(form);
    form.submit();
  }

  var open_in_codepen = document.getElementsByClassName('open-in-codepen');
  for (var i = 0; i < options.length; i++) {
    open_in_codepen[i].addEventListener('click', exportCodePen, false);
  }