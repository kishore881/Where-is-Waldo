function pos(max) {
  var v = Math.random();
  v *= 0.85 * max;
  v = Math.floor(v);
  return v;
}

function notify(dir, note) {
  var notice = $("#notice")[0];
  notice.innerHTML = `<h2>${dir}</h2><p>${note}</p>`;
}

var width = window.innerWidth;
var height = window.innerHeight;

var x = pos(width);
var y = pos(height);
var ow;
if (width *0.07 < 250) ow = Math.floor(width * 0.07);
else ow = 200;
var oh = ow * 1.25;

var wrapper = $($(".wrapper")[0]);
var obj = $("#obj");

wrapper.css({
  width: width.toString() + "px",
  height: height.toString() + "px"
});

obj.css({
  left: x.toString() + "px",
  top: y.toString() + "px",
  width: ow.toString() + "px"
});

window.addEventListener("click", function(e) {
  if (obj.css("opacity") === "1") window.location.reload();
  else {
    var ix = 0;
    var iy = 0;
    if (e.x > x + ow) ix = x + ow - e.x;
    else if (e.x < x) ix = x - e.x;
    if (e.y > y + oh) iy = y + oh - e.y;
    else if (e.y < y) iy = y - e.y;
    if (Math.abs(ix) > Math.abs(iy)) {
      if (ix > 0) {
        notify("Go Right", "Follow the above direction");
      }
      if (ix < 0) {
        notify("Go Left", "Follow the above direction");
      }
    } else if (Math.abs(ix) < Math.abs(iy)) {
      if (iy > 0) {
        notify("Go Down", "Follow the above direction");
      }
      if (iy < 0) {
        notify("Go Up", "Follow the above direction");
      }
    }
    if (ix == 0 && iy == 0) {
      obj.css({ opacity: "1", transition: "0.7s opacity" });
      this.setTimeout(function() {
        notify("Hey, There he is....", "Click to play again");
      }, 700);
    }
  }
});

window.onresize = function() {
  window.location.reload();
};
