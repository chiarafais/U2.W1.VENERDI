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

const emme = function () {
  let m = document.querySelectorAll("svg g g");

  let mFiltrate = [];
  for (let i = 0; i < m.length; i++) {
    if (m[i].style.display === "block") {
      mFiltrate.push(m[i]);
    }
  }
  let i = 0;

  setInterval(() => {
    let numeroRandom = Math.floor(Math.random() * mFiltrate.length - 1) + 1;
    if (i < 40) {
      i++;
      mFiltrate[numeroRandom].style.display = "none";
    } else {
      for (let i = 0; i < mFiltrate.length; i++) {
        mFiltrate[i].style.display = "block";
      }
      i = 0;
    }
  }, 100);
};

emme();
