function openLink(evt, animName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("bar__content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" magenta", "");
    }
    document.getElementById(animName).style.display = "block";
    evt.currentTarget.className += " magenta";
  }