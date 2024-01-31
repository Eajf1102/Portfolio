var i = 0;
function move(id,maxWidth) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(id);
    var width = 10;
    var progressId = setInterval(frame, 10);
    function frame() {
      if (width >= maxWidth) {
        clearInterval(progressId);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}


