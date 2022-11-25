
// SECCION HERO H2 // SECCION HERO H2 // SECCION HERO H2 

consoleText(["Frontend Developer", "Futuro Full Stack Developer"], "text",["#4034aa","#080808"]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute("style", "color:" + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = "console-underscore hidden"
      visible = false;

    } else {
      con.className = "console-underscore"
      visible = true;
    }
  }, 400)
}

// BACKGROUND // BACKGROUND // BACKGROUND

window.onscroll = function () {

  var posicion = window.pageYOffset || document.documentElement.scrollTop;

  var elemento1 = document.getElementById("icon-heart");
  var elemento2 = document.getElementById("icon-heart2");
  var elemento3 = document.getElementById("icon-fire");

  elemento1.style.bottom = posicion * 0.4 + "px";
  elemento2.style.top = posicion * 0.4 + "px";
  elemento3.style.top = posicion * 0.3 + "px";
}