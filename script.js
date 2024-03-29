window.onscroll = function () {
  changeColor();
};

const changeColor = function () {
  if (document.documentElement.scrollTop > 320) {
    document.querySelector("header").className = "headerColor";
    document.querySelector("header .navBar button").className = "buttonColor";
  } else {
    document.querySelector("header").className = "";
    document.querySelector("header .navBar button").className = "";
  }
};
