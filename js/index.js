let header = document.getElementById("header");
let downNavigation = document.getElementById("down-navigation");

const setDownNavigationDisplayStyle = () => {
  if (header.offsetHeight > window.innerHeight) {
    downNavigation.style.display = "none";
  } else {
    downNavigation.style.display = "block";
  }
};

window.onresize = setDownNavigationDisplayStyle;
setDownNavigationDisplayStyle();
