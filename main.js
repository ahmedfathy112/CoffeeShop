let header = document.getElementById("header");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 150) {
    header.style.backgroundColor = "#e2d9c8";
  } else {
    header.style.backgroundColor = "transparent";
  }
  // this.scrollY >= 100? span.classList.add("show"): span.classList.remove("show");
};
