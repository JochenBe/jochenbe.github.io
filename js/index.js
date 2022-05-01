let header = document.getElementById("header");
let nav = document.getElementById("nav");

const setNavDisplayStyle = () => {
  if (header.offsetHeight > window.innerHeight) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
};

window.onresize = setNavDisplayStyle;
setNavDisplayStyle();
