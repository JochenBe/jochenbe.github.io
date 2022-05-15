let header = document.getElementById("header");
let downNav = document.getElementById("down-nav");

const setDownNavDisplayStyle = () => {
  if (header.offsetHeight > window.innerHeight) {
    downNav.style.display = "none";
  } else {
    downNav.style.display = "block";
  }
};

window.onresize = setDownNavDisplayStyle;
setDownNavDisplayStyle();
