let header = document.getElementById("header");
let down = document.getElementById("down");

const setDownDisplayStyle = () => {
  if (header.offsetHeight > window.innerHeight) {
    down.style.display = "none";
  } else {
    down.style.display = "block";
  }
};

window.onresize = setDownDisplayStyle;
setDownDisplayStyle();
