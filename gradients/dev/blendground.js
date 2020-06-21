// Formatter: http://codepen.io/bennettfeely/pen/Hsoun

var background = [
  {
    css: "background:\n\trepeating-linear-gradient(\n\t\t50deg,\n\t\t#F7A37B,\n\t\t#F7A37B 1em,\n\t\t#FFDEA8 1em,\n\t\t#FFDEA8 2em,\n\t\t#D0E4B0 2em,\n\t\t#D0E4B0 3em,\n\t\t#7CC5D0 3em,\n\t\t#7CC5D0 4em,\n\t\t#00A2E1 4em,\n\t\t#00A2E1 5em,\n\t\t#0085C8 5em,\n\t\t#0085C8 6em\n\t),\n\trepeating-linear-gradient(\n\t\t-50deg,\n\t\t#F7A37B,\n\t\t#F7A37B 1em,\n\t\t#FFDEA8 1em,\n\t\t#FFDEA8 2em,\n\t\t#D0E4B0 2em,\n\t\t#D0E4B0 3em,\n\t\t#7CC5D0 3em,\n\t\t#7CC5D0 4em,\n\t\t#00A2E1 4em,\n\t\t#00A2E1 5em,\n\t\t#0085C8 5em,\n\t\t#0085C8 6em\n\t);\n\t\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\trepeating-radial-gradient(\n\t\tcircle,\n\t\ttransparent,\n\t\ttransparent 3.5em,\n\t\ttomato 3.5em,\n\t\ttomato 4.5em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle,\n\t\ttransparent,\n\t\ttransparent 3.5em,\n\t\tdodgerblue 3.5em,\n\t\tdodgerblue 4.5em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle,\n\t\ttransparent,\n\t\ttransparent 2.5em,\n\t\tgold 2.5em,\n\t\tgold 2.75em\n\t), floralwhite;\n\nbackground-blend-mode: multiply;\nbackground-size: 10em 10em;\nbackground-position:\n\t0 0,\n\t5em 5em,\n\t10em 5em;",
  },
  {
    css: "background:\n\tradial-gradient(\n\t\tyellow,\n\t\tyellow 50%,\n\t\ttransparent 50%,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\tcyan,\n\t\tcyan 50%,\n\t\ttransparent 50%,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\tmagenta,\n\t\tmagenta 40%,\n\t\ttransparent 40%,\n\t\ttransparent 100%\n\t), floralwhite;\n\nbackground-size:\n\t8em 8em,\n\t6em 6em,\n\t2em 2em;\n\nbackground-blend-mode: multiply;\nbackground-position:\n\t0 0,\n\t-33% -33%,\n\t-200% -200%;",
  },
  {
    css: "background:\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\tlightblue 2em,\n\t\tlightblue 2.5em,\n\t\ttransparent 2.5em,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\taquamarine 2em,\n\t\taquamarine 2.5em,\n\t\ttransparent 2.5em,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\tkhaki 2em,\n\t\tkhaki 2.5em,\n\t\ttransparent 2.5em,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\tpink 2em,\n\t\tpink 2.5em,\n\t\ttransparent 2.5em,\n\t\ttransparent 100%\n\t), linen;\n\n\nbackground-blend-mode: multiply;\nbackground-size: 5em 5em;\nbackground-position:\n\t0 2.5em,\n\t2.5em 0,\n\t2.5em 2.5em,\n\t0 0;\n}",
  },
  {
    css: "background:\n\tradial-gradient(\n\t\tcircle at bottom left,\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\tbeige 2em,\n\t\tbeige 4em,\n\t\ttransparent 4em,\n\t\ttransparent 6em,\n\t\tkhaki 6em,\n\t\tkhaki 8em,\n\t\ttransparent 8em,\n\t\ttransparent 10em\n\t),\n\tradial-gradient(\n\t\tcircle at top right,\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\tbeige 2em,\n\t\tbeige 4em,\n\t\ttransparent 4em,\n\t\ttransparent 6em,\n\t\tkhaki 6em,\n\t\tkhaki 8em,\n\t\ttransparent 8em,\n\t\ttransparent 10em\n\t),\n\tradial-gradient(\n\t\tcircle at top left,\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\tnavajowhite 2em,\n\t\tnavajowhite 4em,\n\t\ttransparent 4em,\n\t\ttransparent 6em,\n\t\tpeachpuff 6em,\n\t\tpeachpuff 8em,\n\t\ttransparent 8em,\n\t\ttransparent 10em\n\t),\n\tradial-gradient(\n\t\tcircle at bottom right,\n\t\ttransparent 0,\n\t\ttransparent 2em,\n\t\tpalegoldenrod 2em,\n\t\tpalegoldenrod 4em,\n\t\ttransparent 4em,\n\t\ttransparent 6em,\n\t\tpeachpuff 6em,\n\t\tpeachpuff 8em,\n\t\ttransparent 8em,\n\t\ttransparent 10em\n\t), blanchedalmond;\n\t\nbackground-blend-mode: multiply;\nbackground-size: 10em 10em;\nbackground-position: 0 0, 0 0, 5em 5em, 5em 5em;",
  },
  {
    css: "background:\n\tlinear-gradient(\n\t\tcrimson -7.5%,\n\t\tcrimson 2.5%,\n\t\torangered -5%,\n\t\torangered 5%,\n\t\torange -2.5%,\n\t\torange 7.5%,\n\t\tgold 0%,\n\t\tgold 10%,\n\t\t#fff 2.5%,\n\t\t#fff 12.5%,\n\t\tlightblue 5%,\n\t\tlightblue 15%,\n\t\tskyblue 7.5%,\n\t\tskyblue 17.5%,\n\t\tsteelblue 10%,\n\t\tsteelblue 20%,\n\t\t#38678f 12.5%,\n\t\t#38678f 22.5%,\n\t\tskyblue 15%,\n\t\tskyblue 25%,\n\t\t#38678f 17.5%,\n\t\t#38678f 27.5%,\n\t\tsteelblue 20%,\n\t\tsteelblue 30%,\n\t\tskyblue 22.5%,\n\t\tskyblue 32.5%,\n\t\tlightblue 25%,\n\t\tlightblue 35%,\n\t\t#fff 27.5%,\n\t\twhite 37.5%,\n\t\tgold 30%,\n\t\tgold 40%,\n\t\torange 32.5%,\n\t\torange 42.5%,\n\t\torangered 35%,\n\t\torangered 45%,\n\t\tcrimson 37.5%,\n\t\tcrimson 47.5%,\n\t\tgold 40%,\n\t\tgold 50%,\n\t\tcrimson 42.5%,\n\t\tcrimson 52.5%,\n\t\torangered 45%,\n\t\torangered 55%,\n\t\torange 47.5%,\n\t\torange 57.5%,\n\t\tgold 50%,\n\t\tgold 60%,\n\t\t#fff 52.5%,\n\t\t#fff 62.5%,\n\t\tlightblue 55%,\n\t\tlightblue 65%,\n\t\tskyblue 57.5%,\n\t\tskyblue 67.5%,\n\t\tsteelblue 60%,\n\t\tsteelblue 70%,\n\t\t#38678f 62.5%,\n\t\t#38678f 72.5%,\n\t\tskyblue 65%,\n\t\tskyblue 75%,\n\t\t#38678f 67.5%,\n\t\t#38678f 77.5%,\n\t\tsteelblue 70%,\n\t\tsteelblue 80%,\n\t\tskyblue 72.5%,\n\t\tskyblue 82.5%,\n\t\tlightblue 75%,\n\t\tlightblue 85%,\n\t\t#fff 77.5%,\n\t\t#fff 87.5%,\n\t\tgold 80%,\n\t\tgold 90%,\n\t\torange 82.5%,\n\t\torange 92.5%,\n\t\torangered 85%,\n\t\torangered 95%,\n\t\tcrimson 87.5%,\n\t\tcrimson 97.5%,\n\t\tgold 90%,\n\t\tgold 100%),\n\tlinear-gradient(\n\t\t90deg,\n\t\tcrimson -7.5%,\n\t\tcrimson 2.5%,\n\t\torangered -5%,\n\t\torangered 5%,\n\t\torange -2.5%,\n\t\torange 7.5%,\n\t\tgold 0%,\n\t\tgold 10%,\n\t\t#fff 2.5%,\n\t\t#fff 12.5%,\n\t\tlightblue 5%,\n\t\tlightblue 15%,\n\t\tskyblue 7.5%,\n\t\tskyblue 17.5%,\n\t\tsteelblue 10%,\n\t\tsteelblue 20%,\n\t\t#38678f 12.5%,\n\t\t#38678f 22.5%,\n\t\tskyblue 15%,\n\t\tskyblue 25%,\n\t\t#38678f 17.5%,\n\t\t#38678f 27.5%,\n\t\tsteelblue 20%,\n\t\tsteelblue 30%,\n\t\tskyblue 22.5%,\n\t\tskyblue 32.5%,\n\t\tlightblue 25%,\n\t\tlightblue 35%,\n\t\t#fff 27.5%,\n\t\t#fff 37.5%,\n\t\tgold 30%,\n\t\tgold 40%,\n\t\torange 32.5%,\n\t\torange 42.5%,\n\t\torangered 35%,\n\t\torangered 45%,\n\t\tcrimson 37.5%,\n\t\tcrimson 47.5%,\n\t\tgold 40%,\n\t\tgold 50%,\n\t\tcrimson 42.5%,\n\t\tcrimson 52.5%,\n\t\torangered 45%,\n\t\torangered 55%,\n\t\torange 47.5%,\n\t\torange 57.5%,\n\t\tgold 50%,\n\t\tgold 60%,\n\t\t#fff 52.5%,\n\t\t#fff 62.5%,\n\t\tlightblue 55%,\n\t\tlightblue 65%,\n\t\tskyblue 57.5%,\n\t\tskyblue 67.5%,\n\t\tsteelblue 60%,\n\t\tsteelblue 70%,\n\t\t#38678f 62.5%,\n\t\t#38678f 72.5%,\n\t\tskyblue 65%,\n\t\tskyblue 75%,\n\t\t#38678f 67.5%,\n\t\t#38678f 77.5%,\n\t\tsteelblue 70%,\n\t\tsteelblue 80%,\n\t\tskyblue 72.5%,\n\t\tskyblue 82.5%,\n\t\tlightblue 75%,\n\t\tlightblue 85%,\n\t\t#fff 77.5%,\n\t\t#fff 87.5%,\n\t\tgold 80%,\n\t\tgold 90%,\n\t\torange 82.5%,\n\t\torange 92.5%,\n\t\torangered 85%,\n\t\torangered 95%,\n\t\tcrimson 87.5%,\n\t\tcrimson 97.5%,\n\t\tgold 90%,\n\t\tgold 100%\n\t), orangered;\n\nbackground-size: 10em 10em;\nbackground-blend-mode: multiply, normal;",
    author: {
      name: "Yoksel",
      image: "http://bennettfeely.com/gradients/img/yoksel.jpg",
      href: "http://codepen.io/yoksel/"
    }
  },
  {
    css: "background:\n\tlinear-gradient(\n\t\tcyan,\n\t\ttransparent\n\t),\n\tlinear-gradient(\n\t\t-45deg,\n\t\tmagenta,\n\t\ttransparent\n\t),\n\tlinear-gradient(\n\t\t45deg,\n\t\tyellow,\n\t\ttransparent\n\t);\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\trepeating-radial-gradient(\n\t\tcircle at top left,\n\t\tcyan,\n\t\tyellow 2em,\n\t\tmagenta 4em,\n\t\tcyan 6em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at bottom left,\n\t\tcyan,\n\t\tyellow 2em,\n\t\tmagenta 4em,\n\t\tcyan 6em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at top right,\n\t\tcyan,\n\t\tyellow 2em,\n\t\tmagenta 4em,\n\t\tcyan 6em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at bottom right,\n\t\tcyan,\n\t\tyellow 2em,\n\t\tmagenta 4em,\n\t\tcyan 6em\n\t);\n\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\trepeating-linear-gradient(\n\t\ttransparent,\n\t\ttransparent 10px,\n\t\tlightcoral 10px,\n\t\tlightcoral 15px,\n\t\ttransparent 15px,\n\t\ttransparent 20px,\n\t\tlightcoral 15px,\n\t\tlightcoral 40px,\n\t\ttransparent 40px,\n\t\ttransparent 45px,\n\t\tlightcoral 45px,\n\t\tlightcoral 50px,\n\t\ttransparent 50px,\n\t\ttransparent 80px\n\t),\n\trepeating-linear-gradient(\n\t\t90deg,\n\t\ttransparent,\n\t\ttransparent 10px,\n\t\tlightcoral 10px,\n\t\tlightcoral 15px,\n\t\ttransparent 15px,\n\t\ttransparent 20px,\n\t\tlightcoral 15px,\n\t\tlightcoral 40px,\n\t\ttransparent 40px,\n\t\ttransparent 45px,\n\t\tlightcoral 45px,\n\t\tlightcoral 50px,\n\t\ttransparent 50px,\n\t\ttransparent 80px\n\t), floralwhite;\n\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\tradial-gradient(\n\t\trgba(255,255,255,.2) 20%,\n\t\trgba(128,0,128,.4) 31%,\n\t\trgba(128,0,128,.4) 35%,\n\t\trgba(255,255,255,.2) 36%,\n\t\trgba(255,255,255,.2) 40%,\n\t\trgba(128,0,128,.4) 51%,\n\t\trgba(128,0,128,.4) 55%,\n\t\trgba(255,255,255,.2) 56%),\n\tradial-gradient(\n\t\trgba(255,255,255,.2) 20%,\n\t\trgba(0,0,139,.4) 31%,\n\t\trgba(0,0,139,.4) 35%,\n\t\trgba(255,255,255,.2) 36%,\n\t\trgba(255,255,255,.2) 40%,\n\t\trgba(0,0,139,.4) 51%,\n\t\trgba(0,0,139,.4) 55%,\n\t\trgba(255,255,255,.2) 56%),\n\tradial-gradient(\n\t\trgba(255,255,255,.2) 20%,\n\t\trgba(220,20,60,.4) 31%,\n\t\trgba(220,20,60,.4) 35%,\n\t\trgba(255,255,255,.2) 36%,\n\t\trgba(255,255,255,.2) 40%,\n\t\trgba(220,20,60,.4) 51%,\n\t\trgba(220,20,60,.4) 55%,\n\t\trgba(255,255,255,.2) 56%),\n\tradial-gradient(\n\t\trgba(255,255,255,.2) 20%,\n\t\trgba(255,69,0,.4) 31%,\n\t\trgba(255,69,0,.4) 35%,\n\t\trgba(255,255,255,.2) 36%,\n\t\trgba(255,255,255,.2) 40%,\n\t\trgba(255,69,0,.4) 51%,\n\t\trgba(255,69,0,.4) 55%,\n\t\trgba(255,255,255,.2) 56%),\n\tradial-gradient(\n\t\trgba(255,255,255,.2) 20%,\n\t\trgba(255,215,0,.4) 31%,\n\t\trgba(255,215,0,.4) 35%,\n\t\trgba(255,255,255,.2) 36%,\n\t\trgba(255,255,255,.2) 40%,\n\t\trgba(255,215,0,.4) 51%,\n\t\trgba(255,215,0,.4) 55%,\n\t\trgba(255,255,255,.2) 56%),\n\tradial-gradient(\n\t\trgba(255,255,255,.2) 20%,\n\t\trgba(154,205,50,.4) 31%,\n\t\trgba(154,205,50,.4) 35%,\n\t\trgba(255,255,255,.2) 36%,\n\t\trgba(255,255,255,.2) 40%,\n\t\trgba(154,205,50,.4) 51%,\n\t\trgba(154,205,50,.4) 55%,\n\t\trgba(255,255,255,.2) 56%),\n\tradial-gradient(\n\t\trgba(255,255,255,.2) 20%,\n\t\trgba(70,130,180,.4) 31%,\n\t\trgba(70,130,180,.4) 35%,\n\t\trgba(255,255,255,.2) 36%,\n\t\trgba(255,255,255,.2) 40%,\n\t\trgba(70,130,180,.4) 51%,\n\t\trgba(70,130,180,.4) 55%,\n\t\trgba(255,255,255,.2) 56%\n\t), orangered;\n\n\tbackground-size:\n\t\t13em 13em,\n\t\t11em 11em,\n\t\t5em 5em,\n\t\t11em 11em,\n\t\t7em 7em,\n\t\t5em 5em,\n\t\t3em 3em,\n\t\t1em 1em;\n\tbackground-position:\n\t\t50% 50%,\n\t\t20% 20%,\n\t\t30% 30%,\n\t\t70% 70%;\n\tbackground-blend-mode:\n\t\toverlay,\n\t\tnormal,\n\t\thard-light,\n\t\toverlay,\n\t\tmultiply,\n\t\tsoft-light;\n}\n",
    author: {
      name: "Yoksel",
      image: "http://bennettfeely.com/gradients/img/yoksel.jpg",
      href: "http://codepen.io/yoksel/"
    }
  },
  {
    css: "background:\n\trepeating-radial-gradient(\n\t\tcircle at 50% 25%,\n\t\tlimegreen,\n\t\tlimegreen .5em,\n\t\ttransparent 3em,\n\t\ttransparent 4em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at 25% 50%,\n\t\tolivedrab,\n\t\tolivedrab .5em,\n\t\ttransparent 2em,\n\t\ttransparent 4em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at 75% 50%,\n\t\tgreen,\n\t\tgreen .5em,\n\t\ttransparent 2em,\n\t\ttransparent 4em\n\t), lightgreen;\n\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\trepeating-linear-gradient(\n\t\tto top left,\n\t\ttransparent,\n\t\ttransparent 5em,\n\t\t#96526B 5em,\n\t\t#96526B 10em,\n\t\ttransparent 10em,\n\t\ttransparent 15em,\n\t\t#F5CF66 15em,\n\t\t#F5CF66 20em\n\t),\n\trepeating-linear-gradient(\n\t\tto top right,\n\t\ttransparent,\n\t\ttransparent 5em,\n\t\t#EBAD60 5em,\n\t\t#EBAD60 10em,\n\t\ttransparent 10em,\n\t\ttransparent 15em,\n\t\t#8BAB8D 15em,\n\t\t#8BAB8D 20em\n\t), wheat;\n\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\trepeating-radial-gradient(\n\t\tcircle at top left,\n\t\tred,\n\t\tred 4em,\n\t\ttransparent 4em,\n\t\ttransparent 15em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at top right,\n\t\tlime,\n\t\tlime 4em,\n\t\ttransparent 4em,\n\t\ttransparent 15em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at bottom right,\n\t\tyellow,\n\t\tyellow 4em,\n\t\ttransparent 4em,\n\t\ttransparent 15em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle at bottom left,\n\t\tblue,\n\t\tblue 4em,\n\t\ttransparent 4em,\n\t\ttransparent 15em\n\t), white;\n\nbackground-blend-mode: difference;",
  },
  {
    css: "background:\n\trepeating-radial-gradient(\n\t\tcircle,\n\t\ttransparent,\n\t\ttransparent 3em,\n\t\thotpink 1em,\n\t\t\ttransparent 6em,\n\t\ttomato 6.5em\n\t),\n\trepeating-radial-gradient(\n\t\tellipse farthest-corner,\n\t\ttransparent 1em,\n\t\tcornflowerblue 1em,\n\t\t \ttransparent 5em,\n\t\tcornflowerblue 2em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle,\n\t\ttransparent,\n\t\ttransparent 3em,\n\t\tgold 1em,\n\t\t\ttransparent 2em,\n\t\tgold 4em\n\t),\n\trepeating-radial-gradient(\n\t\tcircle,\n\t\ttransparent 3em,\n\t\tgold 1em,\n\t\t\ttransparent 2em,\n\t\tgold 4em\n\t), white;\n\nbackground-blend-mode: multiply;\nbackground-size: 10em 10em;\nbackground-position: 0 0, 5em 5em, 15em 50em;",
    author: {
      name: "Una Kravets",
      image: "http://bennettfeely.com/gradients/img/una.jpg",
      href: "http://codepen.io/unax3/"
    }
  },
  {
    css: "background:\n\trepeating-linear-gradient(\n\t\tto top left,\n\t\tbeige 0,\n\t\tbeige 2em,\n\t\tmoccasin 2em,\n\t\tmoccasin 4em,\n\t\twheat 4em,\n\t\twheat 6em\n\t),\n\trepeating-linear-gradient(\n\t\tto left,\n\t\twhite 0,\n\t\twhite 2em,\n\t\twheat 2em,\n\t\twheat 4em,\n\t\tbeige 4em,\n\t\tbeige 6em\n\t), white;\n\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\tradial-gradient(\n\t\t\tat bottom right,\n\t\t\tdodgerblue 0,\n\t\t\tdodgerblue 1em,\n\t\t\tlightskyblue 1em,\n\t\t\tlightskyblue 2em,\n\t\t\tdeepskyblue 2em,\n\t\t\tdeepskyblue 3em,\n\t\t\tgainsboro 3em,\n\t\t\tgainsboro 4em,\n\t\t\tlightsteelblue 4em,\n\t\t\tlightsteelblue 5em,\n\t\t\tdeepskyblue 5em,\n\t\t\tdeepskyblue 6em,\n\t\t\tlightskyblue 6em,\n\t\t\tlightskyblue 7em,\n\t\t\ttransparent 7em,\n\t\t\ttransparent 8em\n\t\t),\n\t\tradial-gradient(\n\t\t\tat top left,\n\t\t\ttransparent 0,\n\t\t\ttransparent 1em,\n\t\t\tlightskyblue 1em,\n\t\t\tlightskyblue 2em,\n\t\t\tdeepskyblue 2em,\n\t\t\tdeepskyblue 3em,\n\t\t\tlightsteelblue 3em,\n\t\t\tlightsteelblue 4em,\n\t\t\tgainsboro 4em,\n\t\t\tgainsboro 5em,\n\t\t\tdeepskyblue 5em,\n\t\t\tdeepskyblue 6em,\n\t\t\tskyblue 6em,\n\t\t\tskyblue 7em,\n\t\t\tdodgerblue 7em,\n\t\t\tdodgerblue 8em,\n\t\t\ttransparent 8em,\n\t\t\ttransparent 20em\n\t\t),\n\t\tradial-gradient(\n\t\t\tcircle at center bottom,\n\t\t\tcoral, darkslateblue\n\t\t);\n\t\n\tbackground-blend-mode: overlay;\n\tbackground-size:\n\t\t8em 8em, 8em 8em, cover;",
  },
  {
    css: "background:\n\tradial-gradient(\n\t\tcircle at left,\n\t\ttransparent,\n\t\t#99eb47,\n\t\t#99eb47 3.36927%,\n\t\ttransparent 3.36927%,\n\t\ttransparent 6.73854%,\n\t\t#b3e87d 6.73854%,\n\t\t#b3e87d 10.10782%,\n\t\ttransparent 10.10782%,\n\t\ttransparent 13.47709%,\n\t\t#ccebad 13.47709%,\n\t\t#ccebad 16.84636%,\n\t\ttransparent 16.84636%,\n\t\ttransparent 20.21563%,\n\t\t#a6ed5e 20.21563%,\n\t\t#a6ed5e 23.58491%,\n\t\ttransparent 23.58491%,\n\t\ttransparent 26.95418%,\n\t\t#ccebad 26.95418%,\n\t\t#ccebad 30.32345%,\n\t\ttransparent 30.32345%,\n\t\ttransparent 33.69272%,\n\t\t#b3e87d 33.69272%,\n\t\t#b3e87d 37.06199%,\n\t\ttransparent 37.06199%,\n\t\ttransparent 40.43127%,\n\t\t#99eb47 40.43127%,\n\t\t#99eb47 43.80054%,\n\t\ttransparent 43.80054%,\n\t\ttransparent 47.16981%\n\t),\n\tradial-gradient(\n\t\tcircle at right,\n\t\ttransparent,\n\t\t#99eb47 0%,\n\t\t#99eb47 3.36927%,\n\t\ttransparent 3.36927%,\n\t\ttransparent 6.73854%,\n\t\t#b3e87d 6.73854%,\n\t\t#b3e87d 10.10782%,\n\t\ttransparent 10.10782%,\n\t\ttransparent 13.47709%,\n\t\t#ccebad 13.47709%,\n\t\t#ccebad 16.84636%,\n\t\ttransparent 16.84636%,\n\t\ttransparent 20.21563%,\n\t\t#a6ed5e 20.21563%,\n\t\t#a6ed5e 23.58491%,\n\t\ttransparent 23.58491%,\n\t\ttransparent 26.95418%,\n\t\t#ccebad 26.95418%,\n\t\t#ccebad 30.32345%,\n\t\ttransparent 30.32345%,\n\t\ttransparent 33.69272%,\n\t\t#b3e87d 33.69272%,\n\t\t#b3e87d 37.06199%,\n\t\ttransparent 37.06199%,\n\t\ttransparent 40.43127%,\n\t\t#99eb47 40.43127%,\n\t\t#99eb47 43.80054%,\n\t\ttransparent 43.80054%,\n\t\ttransparent 47.16981%\n\t),\n\tradial-gradient(circle at left,\n\t\ttransparent,\n\t\t#99eb47 0%,\n\t\t#99eb47 3.36927%,\n\t\ttransparent 3.36927%,\n\t\ttransparent 6.73854%,\n\t\t#b3e87d 6.73854%,\n\t\t#b3e87d 10.10782%,\n\t\ttransparent 10.10782%,\n\t\ttransparent 13.47709%,\n\t\t#ccebad 13.47709%,\n\t\t#ccebad 16.84636%,\n\t\ttransparent 16.84636%,\n\t\ttransparent 20.21563%,\n\t\t#a6ed5e 20.21563%,\n\t\t#a6ed5e 23.58491%,\n\t\ttransparent 23.58491%,\n\t\ttransparent 26.95418%,\n\t\t#ccebad 26.95418%,\n\t\t#ccebad 30.32345%,\n\t\ttransparent 30.32345%,\n\t\ttransparent 33.69272%,\n\t\t#b3e87d 33.69272%,\n\t\t#b3e87d 37.06199%,\n\t\ttransparent 37.06199%,\n\t\ttransparent 40.43127%,\n\t\t#99eb47 40.43127%,\n\t\t#99eb47 43.80054%,\n\t\ttransparent 43.80054%,\n\t\ttransparent 47.16981%\n\t),\n\tradial-gradient(circle at right,\n\t\ttransparent,\n\t\t#99eb47 0%,\n\t\t#99eb47 3.36927%,\n\t\ttransparent 3.36927%,\n\t\ttransparent 6.73854%,\n\t\t#b3e87d 6.73854%,\n\t\t#b3e87d 10.10782%,\n\t\ttransparent 10.10782%,\n\t\ttransparent 13.47709%,\n\t\t#ccebad 13.47709%,\n\t\t#ccebad 16.84636%,\n\t\ttransparent 16.84636%,\n\t\ttransparent 20.21563%,\n\t\t#a6ed5e 20.21563%,\n\t\t#a6ed5e 23.58491%,\n\t\ttransparent 23.58491%,\n\t\ttransparent 26.95418%,\n\t\t#ccebad 26.95418%,\n\t\t#ccebad 30.32345%,\n\t\ttransparent 30.32345%,\n\t\ttransparent 33.69272%,\n\t\t#b3e87d 33.69272%,\n\t\t#b3e87d 37.06199%,\n\t\ttransparent 37.06199%,\n\t\ttransparent 40.43127%,\n\t\t#99eb47 40.43127%,\n\t\t#99eb47 43.80054%,\n\t\ttransparent 43.80054%,\n\t\ttransparent 47.16981%\n\t), #99e052;\n\nbackground-size: 4em 4em;\nbackground-position:\n\t0 0,\n\t0 2em,\n\t2em 0,\n\t2em 2em;\nbackground-blend-mode:\n\toverlay,\n\toverlay,\n\tnormal,\n\tnormal;\n\n",
    author: {
      name: "Yoksel",
      image: "http://bennettfeely.com/gradients/img/yoksel.jpg",
      href: "http://codepen.io/yoksel/"
    }
  },
  {
    css: "background:\n\trepeating-linear-gradient(\n\t\t#F3F5C4 0,\n\t\t#F3F5C4 3em,\n\t\t#F19181 3em,\n\t\t#F19181 6em\n\t),\n\trepeating-linear-gradient(\n\t\t90deg,\n\t\t#F9CB8F 0,\n\t\t#F9CB8F 3em,\n\t\t#3CBAC8 3em,\n\t\t#3CBAC8 6em\n\t),\n\trepeating-linear-gradient(\n\t\t45deg,\n\t\ttransparent 0,\n\t\ttransparent 6em,\n\t\t#F19181 12em\n\t),\n\trepeating-linear-gradient(\n\t\t-45deg,\n\t\ttransparent 0,\n\t\ttransparent 6em,\n\t\t#F19181 12em\n\t);\n\nbackground-blend-mode: multiply;",
  },
  {
    css: "background-image:\n\trepeating-linear-gradient(\n\t\t90deg,\n\t\tfirebrick,\n\t\tfirebrick 20px,\n\t\tbeige 0,\n\t\tbeige 25px,\n\t\tforestgreen 0,\n\t\tforestgreen 35px,\n\t\tgold 0,\n\t\tgold 40px,\n\t\tcrimson 0,\n\t\tcrimson 60px\n\t),\n\trepeating-linear-gradient(\n\t\tfirebrick,\n\t\tfirebrick 20px,\n\t\tbeige 0,\n\t\tbeige 25px,\n\t\tforestgreen 0,\n\t\tforestgreen 35px,\n\t\tgold 0,\n\t\tgold 40px,\n\t\tcrimson 0,\n\t\tcrimson 60px\n\t);\nbackground-blend-mode: multiply;"
  },
  {
    css : "background:\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 20px,\n\t\t#DC143C 0,\n\t\t#DC143C 25px,\n\t\ttransparent 0,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 20px,\n\t\t#DC143C 0,\n\t\t#DC143C 25px,\n\t\ttransparent 0,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 20px,\n\t\t#3CB371 0,\n\t\t#3CB371 25px,\n\t\ttransparent 0,\n\t\ttransparent 100%\n\t),\n\tradial-gradient(\n\t\ttransparent 0,\n\t\ttransparent 20px,\n\t\t#3CB371 0,\n\t\t#3CB371 25px,\n\t\ttransparent 0,\n\t\ttransparent 100%\n\t), linen;\n\nbackground-blend-mode: multiply;\nbackground-size: 80px 80px;\nbackground-position:\n\t40px 40px,\n\t40px 0,\n\t0 0,\n\t0 40px;"
  },
  {
    css : "background:\n\trepeating-linear-gradient(\n\t\tto top left,\n\t\twheat 0,\n\t\twheat 20px,\n\t\ttransparent 0,\n\t\ttransparent 40px,\n\t\t#228B22 0,\n\t\t#228B22 60px\n\t),\n\trepeating-linear-gradient(\n\t\tto left,\n\t\tcrimson 0,\n\t\tcrimson 20px,\n\t\twheat 0,\n\t\twheat 40px,\n\t\t#228B22 0,\n\t\t#228B22 60px\n\t), beige;\n\nbackground-blend-mode: multiply;"
  },
  {
    css: "background:\n\trepeating-linear-gradient(\n\t\t45deg,\n\t\ttransparent,\n\t\ttransparent 1em,\n\t\tmoccasin 0,\n\t\tmoccasin 2em,\n\t\ttransparent 0,\n\t\ttransparent 3em,\n\t\tpowderblue 0,\n\t\tpowderblue 4em,\n\t\ttransparent 0,\n\t\ttransparent 5em,\n\t\tlavender 0,\n\t\tlavender 6em,\n\t\ttransparent 0,\n\t\ttransparent 7em,\n\t\tbeige 0,\n\t\tbeige 8em\n\t),\n\trepeating-linear-gradient(\n\t\t-45deg,\n\t\ttransparent,\n\t\ttransparent 1em,\n\t\tkhaki 0,\n\t\tkhaki 2em,\n\t\ttransparent 0,\n\t\ttransparent 3em,\n\t\tbeige 0,\n\t\tbeige 4em,\n\t\ttransparent 0,\n\t\ttransparent 5em,\n\t\tpeachpuff 0,\n\t\tpeachpuff 6em\n\t), whitesmoke;\n\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\trepeating-linear-gradient(\n\t\t-45deg,\n\t\ttransparent,\n\t\ttransparent 25%,\n\t\ttomato 0,\n\t\ttomato 50%\n\t),\n\trepeating-linear-gradient(\n\t\t45deg,\n\t\ttransparent,\n\t\ttransparent 25%,\n\t\tdodgerblue 0,\n\t\tdodgerblue 50%\n\t), wheat;\n\nbackground-size: 10em 10em;\nbackground-blend-mode: multiply;",
  },
  {
    css: "background:\n\tlinear-gradient(\n\t\tlimegreen,\n\t\ttransparent\n\t),\n\tlinear-gradient(\n\t\t90deg,\n\t\tskyblue,\n\t\ttransparent\n\t),\n\tlinear-gradient(\n\t\t-90deg,\n\t\tcoral,\n\t\ttransparent\n\t);\n\t\nbackground-blend-mode: screen;",
  }
];


var $html = $("html");
var $background_container = $(".background-container");
var $underlay = $(".underlay");
var $avg = $(".avg");

$(function(){

  if(!('backgroundBlendMode' in document.body.style)) {
    $html.addClass("lame");
  }

  $(window).load(function(){
    $html.addClass("go");

    $("#test_holder").load("tests.html", function(response, status, xhr){
      console.log("Tests loaded = " + status);
      if(status == "success") {
        $(".hint").each(function(){
          var newtext = $(this).attr("data-new");
          $(this).text(newtext);
        });
      }
    });
  });

  loadBackgrounds();

  $underlay.click(function(){
    removePreview();
  });
});



function loadBackgrounds() {
  var bytetotal = 0;

  var length = Object.keys(background).length;

  $.each(background, function(i, background) {

    var bytes = byteCount(background.css);
        bytetotal = bytes + bytetotal;


    if(bytes < 1000){
      var bytes = bytes + ' B';
    } else {
      var bytes = (bytes/1000).toFixed(2) + 'KB';
    }


    if(background.author) {
      var author = '<a class="author tap" href="' + background.author.href + '">'
                    + '<span>' + background.author.name + '</span>'
                    + '<img class="icon" width="32" height="32" src="' + background.author.image + '" />'
                  + '</a>';

    } else { var author = ""; }

    var $swatch = '<div class="tile">'
                  + '<figure class="swatch top">'
                      + '<div class="background top" style="' + background.css + '"></div>'
                      + '<textarea class="code top" spellcheck="false">' + background.css + '</textarea>'
                      + author
                    + '</figure>'
                    + '<figcaption class="information bottom">'
                          + '<nav>'
                            + '<label class="css-toggle button tap"><i class="icon max"></i><span>CSS</span></label>'
                            + '<label class="fallback-toggle button tap" data-hint="View in unsupported browsers"><i class="icon eye"></i></label>'
                            + '<label class="codepen-toggle button tap" data-hint="Edit in Codepen"><i class="icon codepen"></i></label>'
                          + '</nav>'
                          + '<label class="bytes">' + bytes + '</label>'
                    + '</figcaption>'
                + '</div>'

      $background_container.append($swatch);

      if(i == (length - 1)){
        listenSwatch();

        var average = Math.round(bytetotal/length);
        $avg.text(average + ' bytes');
      }
  });
}




function listenSwatch() {

  $(".css-toggle").click(function(){
    var $tile = $(this).parents(".tile");

    if(!$tile.hasClass("fallback")) {
      $underlay.removeClass("fallback");
    } else {
      $underlay.addClass("fallback");
    }

    addPreview($tile);

    if($html.hasClass("preview")){

      if($tile.hasClass("opened")){
        removePreview();
      } else {

        centerTile($tile);

        var timeout;
        $("textarea", $tile).bind('textchange', function() {
          clearTimeout(timeout);
            $(".bytes", $tile).html("Calculating");

            var self = this;
            timeout = setTimeout(function (){
              var css = $("textarea", $tile).val();
              var bytes = byteCount(css);

              $(".background", $tile).attr("style", css);
              $underlay.attr("style", css);

              $(".bytes", $tile).html(bytes + " B");
            }, 500);
        });
      }
    }
  });

  $(".fallback-toggle").click(function(){
    var $tile = $(this).parents(".tile");

    $tile.toggleClass("fallback");
    $underlay.toggleClass("fallback");
  });


  $(".codepen-toggle").click(function(){
    console.log('$(".css-toggle").click();');
    var $tile = $(this).parents(".tile");

    var css = $("textarea", $tile).val();

    codePen(css);
  });
}



function addPreview($tile){
  var bg = $("textarea", $tile).val();
  $underlay.attr("style", bg);
  $html.addClass("preview");
}



function removePreview(){
  $html.removeClass("preview");
  $("textarea").unbind("textchange");
  $(".tile").removeClass("opened").removeAttr("style");
}

function centerTile($tile) {
  var tile_width = $tile.outerWidth();
  var tile_height = $tile.outerHeight();

  var xcenter = $(window).width()/2;
  var ycenter = $(window).height()/2;

  var tile_x_current = $tile.offset().left - 16;
  var tile_y_current = $tile.offset().top - 16;

  var xgoal = (xcenter - (tile_width/2 + 16)) - tile_x_current;
  var ygoal = (ycenter - (tile_height/2 + 16) - tile_y_current) + $(window).scrollTop();

  var move = 'translate3d(' + xgoal + 'px,' + ygoal + 'px,0)';

  $tile.addClass("opened").css("transform", move);
}



function byteCount(css) {
  var css = css.replace(/\t/g, '').replace(/\n/g,'');
  var bytes = encodeURI(css).split(/%..|./).length - 1;

  return bytes;
}



function codePen(css) {
  console.log("codePen();");

  console.log(css);

  var CSS = 'html {\n'
          + 'height: 100%;\n'
          + css
          + '\n}'

  var data = {
    html              : "",
    css               : CSS,
    css_pre_processor : "none",
    css_prefix        : "autoprefixer",
    css_starter       : "reset",
  };

  var JSONstring = JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");

  var $form = $('<form action="http://codepen.io/pen/define" method="POST" target="_blank">'
           + '<input type="hidden" name="data" value=\'' + JSONstring + '\'>'
           + '</form>');

  $form.submit();
}


